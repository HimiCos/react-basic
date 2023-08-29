import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    const {users} = this.props
    return (
      <div>
        {users.map(user => (
          <div key={user.id} className="card">
            <a rel='noreferrer' href={user.html_url} target="_blank">
              <img src={user.avatar_url} style={{width: '100px'}}/>
            </a>
            <p className="card-text">{user.login}</p>
          </div>
        ))}
      </div>
    )
  }
}
