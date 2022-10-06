import './App.css'
import { useState } from 'react'

function App() {
  const [firstInt, setFirstInt] = useState(' ')
  const [secondInt, setSecondInt] = useState(' ')
  const [operator, setOperator] = useState(' ')
  const [hiddenSolution, setHiddenSolution] = useState('')
  const [solution, setSolution] = useState('?')
  const [answer, setAnswer] = useState('')
  const [message, setMessage] = useState('')

  const createProblem = () => {
    let intOne = Math.floor(Math.random() * 111)
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

  const handleChange = (e) => {
    let input = parseInt(e.target.value)
    setAnswer(input)
  }

  const nextProblem = () => {
    createProblem()
    setSolution('?')
    setAnswer('')
    setMessage('')
  }

  const showSolution = () => {
    let sum = firstInt + secondInt
    let dif = firstInt - secondInt
    if (operator === '+') {
      setSolution(sum)
    } else setSolution(dif)
  }

  const checkAnswer = () => {
    let sum = firstInt + secondInt
    let dif = firstInt - secondInt
    if (operator === '+') {
      setHiddenSolution(sum)
    } else setHiddenSolution(dif)
  }

  const outcomeMessage = () => {
    if (hiddenSolution === answer) {
      setMessage(`yass`)
    } else setMessage(`faaahh`)
  }

  const fireBoth = () => {
    checkAnswer()
    outcomeMessage()
  }

  return (
    <div className="App">
      <button onClick={createProblem}>START</button>
      <h1>
        {firstInt} {operator} {secondInt} = {solution}
      </h1>
      <label>Your Answer: </label>
      <input
        type="number"
        id="answer"
        name="answer"
        onChange={handleChange}
        value={answer}
      />
      <br />
      <br />
      <button onClick={fireBoth}>CHECK ANSWER</button>
      <button onClick={showSolution}>SHOW ANSWER</button>
      <br />
      <h1>{message}</h1>

      <button onClick={nextProblem}>NEXT</button>
    </div>
  )
}

export default App
