import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {

  const navigate = useNavigate()

  function back () {
    navigate(-1)
  }

  function forward () {
    navigate(1)
  }

  return (
    <div className="col-xs-offset-2 col-xs-8">
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={back}>後退</button>&nbsp;
        <button onClick={forward}>前進</button>
      </div>
    </div>
  )
}