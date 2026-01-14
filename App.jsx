import { useState } from "react"
import { questions } from "./data/questions"
import { pickDish } from "./utils/decisionLogic"

export default function App() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)

  function answer(option) {
    const updated = [...answers, option]
    setAnswers(updated)

    if (step === questions.length - 1) {
      setResult(pickDish(updated))
    } else {
      setStep(step + 1)
    }
  }

  if (result) {
    return (
      <div style={{ padding: 24 }}>
        <h1>{result.title}</h1>
        <p>{result.vibe}</p>
        <p>You didn’t cook a recipe. You created a moment.</p>
      </div>
    )
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>{questions[step].text}</h2>
      {questions[step].options.map(o => (
        <button
          key={o}
          onClick={() => answer(o)}
          style={{ display: "block", margin: "8px 0" }}
        >
          {o}
        </button>
      ))}
    </div>
  )
}
