// 引入createStore，专门用于创建redux中最为核心的store对象
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入汇总之后的reducer
import reducer from './reducers'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 暴露store
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))