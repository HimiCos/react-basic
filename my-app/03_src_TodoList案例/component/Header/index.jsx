import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {

  handleKeyUp = (event) => {
    const {keyCode,target} = event;
    if(keyCode !== 13) return;
    if(target.value.trim() === ''){
      alert('輸入不能為空');
      return;
    }
    this.props.addTodo({
      id:Date.now(),
      name:target.value.trim(),
      done:false
    });
    target.value = '';
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入你的任務名稱，按回車鍵確認"/>
      </div>
    )
  }
}
