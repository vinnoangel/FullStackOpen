import { useState } from "react";

const StatisticLine = ({text, value, symbol}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value} {symbol}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad, total, average, positive} = props
  if (total > 0) {
    return(
      <table>
        <tbody>
          <StatisticLine text="good" value={good} symbol="" />
          <StatisticLine text="neutral" value={neutral} symbol="" />
          <StatisticLine text="bad" value={bad} symbol="" />
          <StatisticLine text="all" value={total} symbol="" />
          <StatisticLine text="average" value={average} symbol="" />
          <StatisticLine text="positive" value={positive} symbol="%" />
        </tbody>
      </table>
    )
  } else {
    return(
      <div>No feedback given</div>
    )
  }
}

const Button = ({onClick, text}) => 
  <button onClick={onClick}>{text}</button>

const App = () => {
  const goodAverageScore = 1
  const badAverageScore = -1
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodFeedback = () => {
    const updatedGood = good + 1
    const updatedTotal = total + 1
    setGood(updatedGood)
    setTotal(updatedTotal)
    setAverage(((updatedGood * goodAverageScore) + (bad * badAverageScore))/updatedTotal)
    setPositive((updatedGood/updatedTotal)*100)
  }
  const handleNeutralFeedback = () => {
    const updatedNeutral = neutral + 1
    const updatedTotal = total + 1
    setNeutral(updatedNeutral)
    setTotal(updatedTotal)
    setAverage(((good * goodAverageScore) + (bad * badAverageScore))/updatedTotal)
    setPositive((good/updatedTotal)*100)
  }
  const handleBadFeedback = () => {
    const updatedBad = bad + 1
    const updatedTotal = total + 1
    setBad(updatedBad)
    setTotal(updatedTotal)
    setAverage(((good * goodAverageScore) + (updatedBad * badAverageScore))/updatedTotal)
    setPositive((good/updatedTotal)*100)
  }

  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodFeedback} text="good" />
      <Button onClick={handleNeutralFeedback} text="neutral" />
      <Button onClick={handleBadFeedback} text="bad" />

      <h1>statistics</h1>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        average={average} 
        positive={positive} 
      />
    </div>
  )
}

export default App;