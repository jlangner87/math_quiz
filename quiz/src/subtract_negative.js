import { useState } from 'react'
import { Link } from 'react-router-dom'

function NegativeSubtract() {
  const [firstInt, setFirstInt] = useState("LET'S")
  const [secondInt, setSecondInt] = useState('SUBTRACT!')
  const [solution, setSolution] = useState('?')

  const createProblem = () => {
    let intOne = Math.floor(Math.random() * 101)
    let intTwo = Math.floor(Math.random() * 11)
    setFirstInt(intOne)
    if (intTwo <= intOne) {
      createProblem()
    } else setSecondInt(intTwo)
    setSolution('?')
  }

  const showSolution = () => {
    setSolution(firstInt - secondInt)
  }

  return (
    <div className="App">
      <h1 className="title">
        Subtract
        <br />
        Negatives
      </h1>
      <div className="card">
        <h1 className="problem">
          {firstInt} - {secondInt}
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

export default NegativeSubtract
