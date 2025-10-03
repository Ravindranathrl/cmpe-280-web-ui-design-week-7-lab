// Micro-Lab 1 - Counter
// This component implements: +1 button and Reset button
import { useState } from 'react'
import Section from './components/Section.jsx'

export default function CounterLab() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount((previous) => previous + 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <Section title="Micro-Lab 1: Counter">
      <p>Count: {count}</p>
      <div className="actions">
        <button className="button" onClick={handleIncrement}>+1</button>
        <button className="button" onClick={handleReset}>Reset</button>
      </div>
    </Section>
  )
}


