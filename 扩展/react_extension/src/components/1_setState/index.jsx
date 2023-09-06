import React, { Component } from 'react'

export default class Demo extends Component {

  state = {
    count: 0
  }

  add = () => {
    // 1.對象式的setState
    // const { count } = this.state
    // this.setState({ count: count + 1 }, () => {
    //   console.log('當前count值為', this.state.count)
    // })
    this.setState(state => ({ count: state.count + 1 }), () => {
      console.log('當前count值為', this.state.count)
    })
  }
  render() {
    return (
      <div>
        <h1>當前求和為: {this.state.count}</h1>
        <button onClick={this.add}>點我+1</button>
      </div>
    )
  }
}
