import { useState } from 'react'
import { Link } from 'react-router-dom'

function AddSubtract() {
  const [firstInt, setFirstInt] = useState("LET'S")
  const [secondInt, setSecondInt] = useState('MATH')
  const [operator, setOperator] = useState('DO')
  const [solution, setSolution] = useState('?')

  const createProblem = () => {
    let intOne = Math.floor(Math.random() * 11)
    let intTwo = Math.floor(Math.random() * 11)
    let op = Math.floor(Math.random() * 2)
    if (op === 0) {
      setOperator('+')
    } else setOperator('-')
    setFirstInt(intOne)
    if (intTwo > intOne && op === 1) {
      createProblem()
    } else setSecondInt(intTwo)
    setSolution('?')
  }

  const showSolution = () => {
    let sum = firstInt + secondInt
    let dif = firstInt - secondInt
    if (operator === '+') {
      setSolution(sum)
    } else setSolution(dif)
  }

  return (
    <div className="App">
      <h1 className="title">
        Add & Subtract
        <br />
        Numbers 1-10
      </h1>
      <div className="card">
        <h1 className="problem">
          {firstInt} {operator} {secondInt}
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
        <br />
        <div className="back">
          <Link to="/">⬅️ Back to Card Packs</Link>
        </div>
      </div>
    </div>
  )
}

export default AddSubtract
