import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouse:false // 鼠標移入、移出
  }
  // 鼠標移入移出的回調
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag});
    }
  }
  // 勾選、取消勾選某一個todo的回調
  changeTodoCheckbox = (event) => {
    const {changeTodoDone,id} = this.props;
    changeTodoDone(id,event.target.checked);
  }
  // 刪除一個todo的回調
  deleteOneTodo = () => {
    const {deleteTodo,id} = this.props;
    if(window.confirm('確定刪除嗎？')){
      deleteTodo(id);
    }
  }
  render() {
    const {name,done} = this.props;
    const {mouse} = this.state;
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.changeTodoCheckbox}/>
          <span>{name}</span>
        </label>
        <button onClick={this.deleteOneTodo} className="btn btn-danger" style={{display:mouse ?'block':'none'}}>删除</button>
      </li>
    )
  }
}
