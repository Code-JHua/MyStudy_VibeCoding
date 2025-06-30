// import './App.css'

// function App() {
//   const name = '小胡';
//   const songs = [
//     { id: 1, name: '素颜' },
//     { id: 2, name: '平凡之路' },
//     { id: 3, name: '我不告诉你' },
//     { id: 4, name: '等你下课' },
//     { id: 5, name: '成都' }
//   ]
//   const flag = false;
//   const styleObj = {
//     color: 'red'
//   }

//   return (
//     <div className='App'>
//       <h1>你好,{name}!</h1>
//       {/* <ul>
//         {
//           songs.map((item, index) => {
//             return <li key={item.id}>{index + 1}.{item.name}</li>
//           })
//         }
//       </ul> */}
//       {/* <h3>
//         {
//           flag ? 'react 真好玩！' : 'react 真没意思！'
//         }
//       </h3>
//       <div>
//         {
//           flag ? <span>你好</span> : <span>再见</span>
//         }
//       </div> */}
//       {/* <div style={{color: 'red'}}>小胡最帅</div>
//       <div style={styleObj}>小鱼不服</div>
//       <div className='person'>赖总说你们都不行</div> */}

//       <div className={flag ? 'title' : ''}>小胡要试小米</div>
//     </div>
//   )
// }

// export default App;

import List from './components/List'
function App() { //根组件
  const songs = [
    { id: 1, name: '素颜' },
    { id: 2, name: '平凡之路' },
    { id: 3, name: '我不告诉你' },
    { id: 4, name: '等你下课' },
    { id: 5, name: '成都' }
  ]
  
  return (
    <div>
      <h1>hello react</h1>
      <List data={songs}></List>
    </div>
  )
}

export default App;