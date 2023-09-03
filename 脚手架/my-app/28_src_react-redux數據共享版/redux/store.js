// 引入createStore，专门用于创建redux中最为核心的store对象
import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入為Person組件服務的reducer
import personReducer from './reducers/person'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 暴露store
export default createStore(combineReducers({
  count: countReducer,
  persons: personReducer
}), applyMiddleware(thunk))