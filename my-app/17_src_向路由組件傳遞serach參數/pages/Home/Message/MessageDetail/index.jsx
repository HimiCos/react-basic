import React, { Component } from 'react'
import qs from 'qs'


export default class MessageDetail extends Component {
  state = {
    messageArr: [
      { id: 1, content: '排放核污水' },
      { id: 2, content: '監測核污水' },
      { id: 3, content: '謾罵核污水' },
    ]
  }
  render() {
    const {search} = this.props.location
    const { id, title } = qs.parse(search.slice(1))
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {this.state.messageArr[id - 1].content}</li>
      </ul>
    )
  }
}
