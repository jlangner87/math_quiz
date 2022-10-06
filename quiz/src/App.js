import './App.css'
import { useState } from 'react'

function App() {
  const [firstInt, setFirstInt] = useState(' ')
  const [secondInt, setSecondInt] = useState(' ')
  const [operator, setOperator] = useState(' ')
  const [solution, setSolution] = useState('?')

  const createProblem = () => {
    let intOne = Math.floor(Math.random() * 11)
    let intTwo = Math.floor(Math.random() * 11)
    let op = Math.floor(Math.random() * 11)
    setFirstInt(intOne)
    setSecondInt(intTwo)
    if (op > 5) {
      setOperator('+')
    } else setOperator('-')
  }

  const nextProblem = () => {
    let intOne = Math.floor(Math.random() * 11)
    let intTwo = Math.floor(Math.random() * 11)
    let op = Math.floor(Math.random() * 11)
    setFirstInt(intOne)
    setSecondInt(intTwo)
    if (op > 5) {
      setOperator('+')
    } else setOperator('-')
    setSolution('?')
  }

  const checkSolution = () => {
    let sum = firstInt + secondInt
    let dif = firstInt - secondInt
    if (operator === '+') {
      setSolution(sum)
    } else setSolution(dif)
  }

  return (
    <div className="App">
      <button onClick={createProblem}>START</button>
      <h1>
        {firstInt} {operator} {secondInt} = {solution}
      </h1>
      <br />
      <button onClick={checkSolution}>SHOW ANSWER</button>
      <br />

      <button onClick={nextProblem}>NEXT</button>
    </div>
  )
}

export default App
