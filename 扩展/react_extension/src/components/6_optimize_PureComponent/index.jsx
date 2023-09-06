import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

  state = {carName: '奔馳c63'}

  // shouldComponentUpdate(_, nextState) {
  //   return !this.state.carName === nextState.carName
  // }

  changeCar = () => {
    this.setState({})
  }

  render() {
    console.log('Parent---render')
    const {carName} = this.state
    return (
      <div className='parent'>
        <h3>我是Parent組件</h3>
        <span>我的車名是: {carName}</span><br />
        <button onClick={this.changeCar}>點我換車名</button>
        <Child carName={carName}/>
      </div>
    )
  }
}

class Child extends PureComponent {

  // shouldComponentUpdate(nextProps, _) {
  //   return !this.props.carName === nextProps.carName
  // }

  render() {
    console.log('Child---render')
    return (
      <div className='child'>
        <h3>我是Child組件</h3>
        <span>我接受到的汽車名: {this.props.carName}</span>
      </div>
    )
  }
}
