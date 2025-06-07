// 当用户点击提交按钮时，执行以下操作：
// 1. 获取用户输入的内容
// 2. 将内容添加到 ul 列表中

// 监听提交按钮的点击事件

// 获取 form 表单元素
const form = document.querySelector('.form');
// 获取用户输入的内容
const input = document.querySelector('.form_input');
// 获取 ul 列表元素
const ul = document.querySelector('.todo-list');

const toDoListArray = []; // 存储待办事项的数组

// 监听 form 表单的提交事件
form.addEventListener('submit', function (event) {
    // 阻止表单的默认提交行为
    event.preventDefault();

    let itemId = String(Date.now()); // 生成唯一的 id
    let toDoItem = input.value; // 获取用户输入的内容

    addItemToArray(itemId, toDoItem);
    addItemToDom(itemId, toDoItem);

    console.log(input.value);
})

function addItemToArray(id, item) {
    itemId: id;
    todoItem: item
}

function addItemToDom(id, item) {
    // 1. 创建 li 元素
    const li = document.createElement('li');
    // 2. 给 li 元素添加内容
    li.textContent = item;
    // 给 li 元素添加 data-id 属性
    li.setAttribute('data-id', id);
    // 3. 将 li 元素添加到 ul 列表中
    ul.appendChild(li);
}

// function renderToDoList(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         // 1. 创建 li 元素
//         const li = document.createElement('li');
//         // 2. 给 li 元素添加内容
//         li.textContent = arr[i].todoItem;
//         // 3. 将 li 元素添加到 ul 列表中
//         ul.appendChild(li);
//     }
// }

// 移除代办事项
ul.addEventListener('click', function (event) {
    // 1. 获取被点击的元素
    const target = event.target;
    // 2. 判断被点击的元素是否是 li 元素
    if (target.tagName === 'LI') {
        // 3. 获取被点击的 li 元素的 data-id 属性
        const id = target.getAttribute('data-id');
        // 4. 从数组中移除对应的待办事项
        removeItemFromArray(id);
        // 5. 从 DOM 中移除对应的 li 元素
        removeItemFromDom(target);
    }
})
function removeItemFromArray(id) {
    for (var i = 0; i < toDoListArray.length; i++) {
        if (toDoListArray[i].itemId === id) {
            toDoListArray.splice(i, 1);
            break;
        }
    }
}

function removeItemFromDom(target) {
    target.remove();
}