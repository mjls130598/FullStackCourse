import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({name, number}) => (
  <p>{name} {number}</p>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {setGood(good + 1)}
  const handleClickNeutral = () => {setNeutral(neutral + 1)}
  const handleClickBad = () => {setBad(bad + 1)}

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleClickGood} text="good"/>
        <Button handleClick={handleClickNeutral} text="neutral"/>
        <Button handleClick={handleClickBad} text="bad"/>
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistic name="good" number={good}/>
        <Statistic name="neutral" number={neutral}/>
        <Statistic name="bad" number={bad}/>
      </div>
    </div>
  )
}

export default App