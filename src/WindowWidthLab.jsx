// Micro-Lab 3 - Window Width Tracker
// This component implements: Track window width using useEffect
import { useEffect, useState } from 'react'
import Section from './components/Section.jsx'

export default function WindowWidthLab() {
  const [width, setWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 0))

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    // Set once in case of hydration or first mount difference
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Section title="Micro-Lab 3: Window Width">
      <p>Current width: {width}px</p>
    </Section>
  )
}


