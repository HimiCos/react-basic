import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = {id:Date.now(),name,age}
    this.props.addPerson(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  render() {
    const {count} = this.props
    return (
      <div>
        <h2>我是Person組件</h2>
        <h4>上方組件求和為: {count}</h4>
        &nbsp;<input ref={c=>this.nameNode = c} type="text" placeholder='請輸入姓名'/>
        &nbsp;<input ref={c=>this.ageNode = c} type="text" placeholder='請輸入年齡'/>
        &nbsp;<button onClick={this.addPerson}>添加</button><br/><br/>
        <ul>
        {
          this.props.persons.map((p)=>{
            return <li key={p.id}>{p.name}--{p.age}</li>
          })
        }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    persons:state.persons,
    count:state.count
  }),
  {
    addPerson
  }
)(Person)
