// 創建外殼組件app
import React, {Component} from 'react';
import Headers from './component/Header';
import List from './component/List';
import Footer from './component/Footer';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: '001',
        name: '吃飯',
        done: true
      }, {
        id: '002',
        name: '睡覺',
        done: true
      }, {
        id: '003',
        name: '打代碼',
        done: false
      }
    ]
  }
  // 添加一個todo，接收的參數是todo對象
  addTodo = (todoObj) => {
    const {todos} = this.state;
    const newTodos = [
      todoObj,
      ...todos
    ];
    this.setState({todos: newTodos});
  }
  // 勾選、取消勾選某一個todo的回調
  changeTodoDone = (id,Checked) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id)
        return {
          ...todoObj,
          done: Checked
        }
      else 
        return todoObj
      })
    this.setState({todos:newTodos})
  }
  // 刪除一個todo的回調
  deleteTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }
  // 勾選、取消勾選全部todo的回調
  changeAllTodoDone = (Checked) => {
    const {todos} = this.state;
    const newTodos = todos.map((todoObj) => {
      return {
        ...todoObj,
        done:Checked
      }
    })
    this.setState({todos:newTodos})
  }
  // 清除已完成任務的回調
  deleteDoneTodo = () => {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Headers addTodo={this.addTodo}/>
          <List todos={todos} changeTodoDone={this.changeTodoDone} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} changeAllTodoDone={this.changeAllTodoDone} deleteDoneTodo={this.deleteDoneTodo}/>
        </div>
      </div>
    );
  }
}

// 暴露app組件
export default App;