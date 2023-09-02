// 引入Count的UI組件
import CountUI from '../../components/Count';
// 引入connect用於連接UI組件與redux
import {connect} from 'react-redux';
// 引入action
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action';

// 使用connect()()創建並暴露一個Count的容器組件
export default connect(
  // 映射狀態
  state => ({count:state}),
  // 映射操作狀態的方法
  {
    increment:(data)=>(createIncrementAction(data)),
    decrement:(data)=>(createDecrementAction(data)),
    incrementAsync:(data,time)=>(createIncrementAsyncAction(data,time)),
  }
)(CountUI)