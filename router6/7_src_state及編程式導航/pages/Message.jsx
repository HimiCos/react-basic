import React,{useState} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {

  const navigate = useNavigate()

  const [messages, setMessages] = useState([
    {id:'001',title:'message001',content:'我愛你, 你愛我嗎?'},
    {id:'002',title:'message002',content:'我不愛你, 你愛我嗎?'},
    {id:'003',title:'message003',content:'我愛你, 你不愛我嗎?'},
  ])

  function showDetail(m){
    // 跳轉到detail路由
    navigate('detail', {
      replace: false,
      state: {
        id:m.id,
        title:m.title,
        content:m.content
      }
    })
  }
  return (
    <div>
      <ul>
        {
          messages.map((m)=>{
            return (
              <li key={m.id}>
                <Link 
                  to='detail' 
                  state={{
                    id:m.id,
                    title:m.title,
                    content:m.content
                  }}
                >{m.title}</Link>
                &nbsp;<button onClick={()=>showDetail(m)}>查看詳情</button>
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
