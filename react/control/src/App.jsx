// function App() {

//   function onChange(event) {
//     console.log(event.target.value);
    
//   }
//   return (
//     <div>
//       <input type="text" onChange={onChange} defaultValue={'hello'}/>
//     </div>
//   )
// }


import {useRef, useEffect} from 'react'
function App() { // 非受控模式
  const inputRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      console.log(inputRef.current.value);
    }, 2000)
  }, [])
  
  return (
    <div>
      <input type="text"  defaultValue={'hello'} ref={inputRef}/>
    </div>
  )
}
export default App