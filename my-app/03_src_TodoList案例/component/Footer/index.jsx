import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // 勾選、取消勾選全部todo的回調
  changeAllTodoCheckbox = (event) => {
    this.props.changeAllTodoDone(event.target.checked);
  }
  // 清除已完成任務的回調
  deleteMoreTodo = () => {
    if(window.confirm('確定刪除嗎？')){
      this.props.deleteDoneTodo();
    }
  }
  render() {
    const {todos} = this.props;
    const AllTodo = todos.length;
    const DoneTodo = todos.reduce((pre,todo) => {
      return pre + (todo.done ? 1 : 0)
    },0)

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.changeAllTodoCheckbox}/>
        </label>
        <span>
          <span>已完成{DoneTodo}</span> / 全部{AllTodo}
        </span>
        <button className="btn btn-danger" onClick={this.deleteMoreTodo}>清除已完成任務</button>
      </div>
    )
  }
}
