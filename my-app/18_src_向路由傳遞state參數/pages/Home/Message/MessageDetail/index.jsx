import React, { Component } from 'react'

export default class MessageDetail extends Component {
  state = {
    messageArr: [
      { id: 1, content: '排放核污水' },
      { id: 2, content: '監測核污水' },
      { id: 3, content: '謾罵核污水' },
    ]
  }
  render() {
    const {id, title} = this.props.location.state || {}
    const findResult = this.state.messageArr.find((msgObj) => {
      return msgObj.id === id
    }) || {}
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.content}</li>
      </ul>
    )
  }
}
