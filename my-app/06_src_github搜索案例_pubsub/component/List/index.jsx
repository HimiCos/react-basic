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

  render() {
    const {users, isFirst, isLoading, err} = this.state
    
    PubSub.subscribe('onSearch', (msg, searchValue) => {
      this.setState({ isFirst: false, isLoading: true })
      axios.get(`https://api.github.com/search/users?q=${searchValue}`).then(
        response => {
          const users = response.data.items
          this.setState({ users })
          this.setState({ isLoading: false })
        }
      ).catch(
        err => {
          this.setState({ isLoading: false, err: true })
        }
      )
    })

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
