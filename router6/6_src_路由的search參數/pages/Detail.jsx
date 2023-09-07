import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {

  const [searchParams] = useSearchParams()

  // const location = useLocation()
  // console.log(location);

  return (
    <ul>
      <li>id: {searchParams.get('id')}</li>
      <li>title: {searchParams.get('title')}</li>
      <li>content: {searchParams.get('content')}</li>
    </ul>
  )
}
