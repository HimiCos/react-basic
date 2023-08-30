import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
import Item from '../Item'


export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: false,
  }
  componentDidMount(){
    PubSub.subscribe('onSearch', async (msg, searchValue) => {
      this.setState({ isFirst: false, isLoading: true })
      // 使用fetch發送ajax請求
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${searchValue}`)
        const data = await response.json()
        this.setState({ users: data.items })
        this.setState({ isLoading: false })
      } catch {
        this.setState({ isLoading: false, err: true })
      }
    })
  }

  render() {
    const {users, isFirst, isLoading, err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h1>Enter User Name</h1> :
          isLoading ? <h1>Loading...</h1> :
          err ? <h1>Err</h1> :
          users[0] ? <Item users={users}/> : <h1>無該用戶</h1>
        }
      </div>
    )
  }
}
