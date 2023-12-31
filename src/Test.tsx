import { useState } from 'react'
import ymgLogo from '/logo.svg'
import './App.css'

function Test() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
        <a href="https://www.ymgmcmc.com" target="_blank">
            <img src={ymgLogo} className="logo" alt="YMG logo" />
        </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        <p>
            Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        </div>
        <p className="read-the-docs">
        Click on the ymgmcmc logo to learn more
        </p>
    </>
  )
}

export default Test