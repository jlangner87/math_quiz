import { useState } from 'react'
import { Link } from 'react-router-dom'

function Multiplication11() {
  const [firstInt, setFirstInt] = useState("LET'S")
  const [secondInt, setSecondInt] = useState('MULTIPLY')
  const [solution, setSolution] = useState('?')

  const createProblem = () => {
    let intOne = Math.floor(Math.random() * 12)
    let intTwo = 11
    setFirstInt(intOne)
    setSecondInt(intTwo)
    setSolution('?')
  }

  const showSolution = () => {
    let product = firstInt * secondInt
    setSolution(product)
  }

  return (
    <div className="App">
      <h1 className="title">
        Multiply
        <br />
        Numbers by 11
      </h1>
      <div className="card">
        <h1 className="problem">
          {firstInt} ✕ {secondInt}
        </h1>
        <h1 className="line">__________</h1>
        <h1 className="solution"> {solution}</h1>
      </div>
      <br />
      <div>
        <button className="start" onClick={createProblem}>
          NEW PROBLEM
        </button>
        <button className="show" onClick={showSolution}>
          SHOW ANSWER
        </button>
      </div>
      <div className="back">
        <Link to="/">⬅️ Back to Card Packs</Link>
      </div>
    </div>
  )
}

export default Multiplication11
