import React, { Component } from 'react'

export default class Header extends Component {
  state = {
    searchValue: ''
  }
  handleInputChange = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  handleButtonClick = () => {
    const { searchValue } = this.state
    this.props.onSearch(searchValue)
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" onChange={this.handleInputChange}/>&nbsp;<button onClick={this.handleButtonClick}>Search</button>
        </div>
      </section>
    )
  }
}
