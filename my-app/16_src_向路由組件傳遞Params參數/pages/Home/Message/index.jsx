import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import MessageDetail from './MessageDetail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: 1, title: '🇯🇵'},
      { id: 2, title: '🇰🇷'},
      { id: 3, title: '🇨🇳'},
    ]
  }
  render() {
    return (
      <div>
        {
          this.state.messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
              </li>
            )
          })
        }
        <br />
        <Route path="/home/message/detail/:id/:title" component={MessageDetail}/>
      </div>
    )
  }
}
