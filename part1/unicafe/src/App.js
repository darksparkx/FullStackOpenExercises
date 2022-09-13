import { useState } from 'react'
import Button from './components/Button'
import Statistics from "./components/Statistics"
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <Button text="good" click={() => {
        setGood(good + 1);
        setAverage(average + 1)
        setTotal(total + 1)
      }} />
      <Button text="neutral" click={() => {
        setNeutral(neutral + 1);
        setTotal(total + 1)
      }} />
      <Button text="bad" click={() => {
        setBad(bad + 1);
        setAverage(average - 1)
        setTotal(total + 1)
      }} />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} />

    </div>
  )
}

export default App