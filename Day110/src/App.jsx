import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)

  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "I am good todo"
    },
    {
      title: "hey another todo",
      desc: "I am good todo to do"
    },
    {
      title: "hey i am grocery to do ",
      desc: "I am good  grocery todo"
    }
  ])

  const Todo = ({ todo }) => {
    return (<>
      <div className="m-4 border border-1 border-purple-400">
        <div className='todo'>{todo.title}</div>
        <div className='todo'>{todo.desc}</div>

      </div>

    </>)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* This is normal java script  */}
      {showbtn ? <button>Button is true</button> : <button>Button is false</button>}

      {todos.map(todo => {
        return <Todo key={todo.title} todo={todo} />
      })}

      {/* Better way   }
      {showbtn && <button>I will be shown only when second button is clicked</button> */}



      <div className="card">
        <button onClick={() => setshowbtn((!showbtn))}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
