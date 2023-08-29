import React, { Component } from 'react'
import Header from './component/Header'
import List from './component/List'
import './App.css'
import axios from 'axios'

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: false,
  }
  onSearch = (searchValue) => {
    this.setState({ isFirst: false, isLoading: true })
    axios.get(`https://api.github.com/search/users?q=${searchValue}`).then(
      response => {
        const users = response.data.items
        this.setState({ users })
        this.setState({ isLoading: false })
      }
    ).catch(
      err => {
        this.setState({ isLoading: false, err: true })
      }
    )
  }
  render() {
    return (
      <div className="container">
        <Header onSearch={this.onSearch}/>
        <List {...this.state}/>
      </div>
    )
  }
}