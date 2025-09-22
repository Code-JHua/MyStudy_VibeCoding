const MiniReact = {
    createElement
}

window.MiniReact = {
    createElement
}

function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => {
                const isTextNode = typeof child === 'string' || typeof child === 'number'
                return isTextNode ? createTextNode(child) : child
            })
        }
    }
}

function createTextNode(text) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: []
        }
    }
}

let nextUnitOfWork = null // 指向下一个需要处理的工作单元（Fiber节点）
let wipRoot = null  // 表示当前正在构建中的 Fiber 树的根节点
let currentRoot = null  // 表示当前已经渲染完成的 Fiber 树的根节点
let deletions = null

// 渲染函数 -- 初始化渲染
function render(element, container) {
    wipRoot = {
        dom: container,
        props: {
            children: [element]
        },
        alternate: currentRoot
    }
    deletions = []
    nextUnitOfWork = wipRoot
}

// 工作循环 -- 时间分片
function workLoop(deadline) {  
    let shouldYield = false
    while (nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
        shouldYield = deadline.timeRemaining() < 1
    }
    if (!nextUnitOfWork && wipRoot) {
        commitRoot() // 整个 vdom 树全部转换完毕, 可以渲染页面了
    }
    requestIdleCallback(workLoop)  // 递归处理超时任务
}
requestIdleCallback(workLoop) // 浏览器空闲时调用 workLoop 函数 -- 时间分片

// 工作单元的处理
function performUnitOfWork(fiber) { 
    const isFunctionComponent = fiber.type instanceof Function
    if(isFunctionComponent) {
        updateFunctionComponent(fiber)
    } else {
        updateHostComponent(fiber)
    }
    if(fiber.child) {
        return fiber.child
    }
    let nextFiber = fiber
    while(nextFiber) {
        if(nextFiber.sibling) {
            return nextFiber.sibling
        }
        nextFiber = nextFiber.return
    }
    return nextFiber
}

let wipFiber = null
let stateHookIndex = null

// 函数组件的更新
function updateFunctionComponent(fiber) { 
    wipFiber = fiber
    stateHookIndex = 0
    wipFiber.stateHooks = []
    wipFiber.effectHooks = []

    const children = [fiber.type(fiber.props)]
    reconcileChildren(fiber, children) // 将函数组件中的 jsx 集成到 fiber 中
}

// 原生组件的更新
function updateHostComponent(fiber) { 
    if(!fiber.dom) {
        fiber.dom = createDom(fiber)
    }
    reconcileChildren(fiber, fiber.props.children)
}

// 创建 dom 节点
function createDom(fiber) {
    const dom = fiber.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(fiber.type)
    updateDom(dom, {}, fiber.props)
    return dom
}

// 更新 dom 节点
const isEvent = key => key.startsWith('on')
const isProperty = key => key !== 'children' && !isEvent(key)
const isNew = (oldValue, newValue) => oldValue !== newValue
const isGone = (oldValue, newValue) => oldValue !== newValue
function updateDom(dom, oldProps, newProps) {
    // 移除旧的事件
    Object.keys(oldProps).filter(isEvent).filter(key => !(key in newProps) || isNew(oldProps[key], newProps[key])).forEach(key => {
        const eventType = key.toLowerCase().substring(2)
        dom.removeEventListener(eventType, oldProps[key])
    })

    // 移除旧的属性
    Object.keys(oldProps).filter(isProperty).filter(key => !(key in newProps) || isGone(oldProps[key], newProps[key])).forEach(key => {
        dom[key] = ''
    })

    // 添加新的属性
    Object.keys(newProps).filter(isProperty).forEach(key => {
        dom[key] = newProps[key]
    })

    // 添加新的事件
    Object.keys(newProps).filter(isEvent).forEach(key => {
        const eventType = key.toLowerCase().substring(2)
        dom.addEventListener(eventType, newProps[key])
    })
}

// diff 算法
function reconcileChildren(wipFiber, elements) {
    let index = 0
    let oldFiber = wipFiber.alternate?.child
    let prevSibling = null

    while (index < elements.length || oldFiber != null) {
        const element = elements[index]
        let newFiber = null

        const sameType = element?.type == oldFiber?.type

        if (sameType) {
            newFiber = {
                type: oldFiber.type,
                props: element.props,
                dom: oldFiber.dom,
                return: wipFiber,
                alternate: oldFiber,
                effectTag: "UPDATE",
            }
        }
        if (element && !sameType) {
            newFiber = {
                type: element.type,
                props: element.props,
                dom: null,
                return: wipFiber,
                alternate: null,
                effectTag: "PLACEMENT",
            }
        }
        if (oldFiber && !sameType) {
            oldFiber.effectTag = "DELETION"
            deletions.push(oldFiber)
        }

        if (oldFiber) {
            oldFiber = oldFiber.sibling
        }

        if (index === 0) {
            wipFiber.child = newFiber
        } else if (element) {
            prevSibling.sibling = newFiber
        }

        prevSibling = newFiber
        index++
    }
}

function commitRoot() {
    deletions.forEach(commitWork)
    commitWork(wipRoot.child)
    currentRoot = wipRoot
    wipRoot = null
    deletions = []
}
function commitWork(fiber) {
    if (!fiber) {
        return
    }

    let domParentFiber = fiber.return
    while (!domParentFiber.dom) {
        domParentFiber = domParentFiber.return
    }
    const domParent = domParentFiber.dom

    if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
        domParent.appendChild(fiber.dom)
    } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
        updateDom(fiber.dom, fiber.alternate.props, fiber.props)
    } else if (fiber.effectTag === "DELETION") {
        commitDeletion(fiber, domParent)
    }

    commitWork(fiber.child)
    commitWork(fiber.sibling)
}
function commitDeletion(fiber, domParent) {
    if (fiber.dom) {
        domParent.removeChild(fiber.dom)
    } else {
        commitDeletion(fiber.child, domParent)
    }
}