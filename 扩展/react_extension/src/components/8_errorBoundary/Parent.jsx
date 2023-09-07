import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

  state = {
    hasError: '' // 用於標識子組件是否產生錯誤
  }

  static getDerivedStateFromError() {
    return {hasError: true}
  }

  componentDidCatch() {
    console.log('用於記錄錯誤, 反饋給服務器, 用於通知編碼人員進行bug的解決')
  }

  render() {
    return (
      <div>
        <h2>我是Parent組件</h2>
        {this.state.hasError ? <h2>當前網路不穩定，請稍後再試</h2> : <Child/>}
      </div>
    )
  }
}
