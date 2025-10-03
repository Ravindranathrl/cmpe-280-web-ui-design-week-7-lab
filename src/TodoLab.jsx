// Micro-Lab 2 - To-Do List
// This component implements: Input + Button, add items to array state, render list
import { useState } from 'react'
import Section from './components/Section.jsx'

export default function TodoLab() {
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  function handleAdd() {
    const trimmed = text.trim()
    if (!trimmed) return
    setItems((previous) => [...previous, trimmed])
    setText('')
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <Section title="Micro-Lab 2: To-Do List">
      <div className="actions">
        <input
          placeholder="Add a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="button" onClick={handleAdd}>Add</button>
      </div>
      <ul className="list">
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </Section>
  )
}


