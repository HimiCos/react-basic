import { ADD_PERSON } from '../constants'

const initState = [{id:'001' ,name:'HimiCos', age:19}] // 初始化状态
export default function personReducer(preState=initState, action){
  // 从action对象中获取：type、data
  const {type, data} = action
  // 根据type决定如何加工数据
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState
  }
}