import React,{useState} from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
  const [messages, setMessages] = useState([
    {id:'001',title:'message001',content:'我愛你, 你愛我嗎?'},
    {id:'002',title:'message002',content:'我不愛你, 你愛我嗎?'},
    {id:'003',title:'message003',content:'我愛你, 你不愛我嗎?'},
  ])
  return (
    <div>
      <ul>
        {
          messages.map((m)=>{
            return (
              <li key={m.id}>
                <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>
              </li>
            )
          })
        }
      </ul>
      <hr />
      <Outlet/>
    </div>
  )
}
