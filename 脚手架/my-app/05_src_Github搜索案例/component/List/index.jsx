import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props
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
