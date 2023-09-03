import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import MessageDetail from './MessageDetail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '1', title: '🇯🇵'},
      { id: '2', title: '🇰🇷'},
      { id: '3', title: '🇨🇳'},
    ]
  }
  pushShow = (id,title) => {
    // push跳轉+携帶params參數
    this.props.history.push(`/home/message/detail/${id}/${title}`)
    // push跳轉+携帶search參數
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    // push跳轉+携帶state參數
    // this.props.history.push(`/home/message/detail`,{id,title})
  }
  replaceShow = (id,title) => {
    // replace跳轉+携帶params參數
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // replace跳轉+携帶search參數
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
    // replace跳轉+携帶state參數
    // this.props.history.replace(`/home/message/detail`,{id,title})
  }
  render() {
    return (
      <div>
        {
          this.state.messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                &nbsp;<button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>Push</button>
                &nbsp;<button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>Replace</button>
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
