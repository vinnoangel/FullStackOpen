import { useState } from "react";

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
    setPositive(updatedGood/updatedTotal)
  }
  const handleNeutralFeedback = () => {
    const updatedNeutral = neutral + 1
    const updatedTotal = total + 1
    setNeutral(updatedNeutral)
    setTotal(updatedTotal)
    setAverage(((good * goodAverageScore) + (bad * badAverageScore))/updatedTotal)
    setPositive(good/updatedTotal)
  }
  const handleBadFeedback = () => {
    const updatedBad = bad + 1
    const updatedTotal = total + 1
    setBad(updatedBad)
    setTotal(updatedTotal)
    setAverage(((good * goodAverageScore) + (updatedBad * badAverageScore))/updatedTotal)
    setPositive(good/updatedTotal)
  }

  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodFeedback}>good</button>
      <button onClick={handleNeutralFeedback}>neutral</button>
      <button onClick={handleBadFeedback}>bad</button>
      <div>
        <h1>statistics</h1>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {total}</div>
        <div>average {average}</div>
        <div>positive {positive} %</div>
      </div>
    </div>
  )
}

export default App;