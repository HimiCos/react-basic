import React, { Component, Fragment } from 'react'

const UserNameContext = React.createContext()
const {Provider} = UserNameContext

export default class A extends Component {
  state = {username: 'tom', age: 18}
  render() {
    const {username,age} = this.state
    return (
      <Fragment>
        <h1>我是A, 我的用戶名是{username}</h1>
        <Provider value={{username,age}}>
          <B username={username}/>
        </Provider>
      </Fragment>
    )
  }
}

class B extends Component {
  render() {
    return (
      <Fragment>
        <h2>我是B, 我從A組件接受到的用戶名是{this.props.username}</h2>
        <C/>
      </Fragment>
    )
  }
}

class C extends Component {
  static contextType = UserNameContext
  render() {
    return (
      <Fragment>
        <h3>我是C, 我從A組件接受到的用戶名是{this.context.username} 年齡: {this.context.age}</h3>
      </Fragment>
    )
  }
}
