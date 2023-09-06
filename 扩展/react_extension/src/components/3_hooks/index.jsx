import React from 'react'
import { createRoot } from 'react-dom/client';

//類式組件
// class Demo extends Component {

//   state = { count: 0 }

//   add = () => {
//     this.stateState(state => ({ count: state.count + 1 }))
//   }

//   render() {
//     return (
//       <div>
//         <h2>當前求和為: {this.state.count}</h2>
//         <button onClick={this.add}>點我+1</button>
//       </div>
//     )
//   }
// }

// 函數式組件
function Demo() {

  const [count,setCount] = React.useState(0)
  const myRef = React.useRef()

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, [])

  function add () {
    setCount(count => count + 1)
  }

  // 卸載組件
  function unmount () {
    // 使用 root.unmount() 卸載組件
    createRoot(document.getElementById('root')).unmount()
  }

  // 獲取 input 的值
  function show () {
    alert(myRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={myRef}/>
      <h2>當前求和為: {count}</h2>
      <button onClick={add}>點我+1</button>
      <button onClick={unmount}>卸載組件</button>
      <button onClick={show}>點我提示數據</button>
    </div>
  )
}
export default Demo