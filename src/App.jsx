// App Shell: Navigation + Routes only
import './App.css'
// Micro-Lab components imports
import CounterLab from './CounterLab.jsx'
import TodoLab from './TodoLab.jsx'
import WindowWidthLab from './WindowWidthLab.jsx'
import SignupFormDemo from './SignupFormDemo.jsx'
import SignupFormPracticeConfirm from './SignupFormPracticeConfirm.jsx'
import SignupFormStretchTerms from './SignupFormStretchTerms.jsx'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      {/* Navigation Links to separate pages */}
      <nav style={{ display: 'flex', gap: 12, marginTop: 24 }}>
        <Link to="/">Home</Link>
        <Link to="/counterlab">CounterLab</Link>
        <Link to="/todolab">TodoLab</Link>
        <Link to="/windowwidthlab">WindowWidthLab</Link>
        <Link to="/signup-demo">Signup Demo</Link>
        <Link to="/signup-practice">Signup Practice</Link>
        <Link to="/signup-stretch">Signup Stretch</Link>
      </nav>

      {/* Route Definitions */}
      <div style={{ borderTop: '1px solid #444', marginTop: 24, paddingTop: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counterlab" element={<CounterLab />} />
          <Route path="/todolab" element={<TodoLab />} />
          <Route path="/windowwidthlab" element={<WindowWidthLab />} />
          <Route path="/signup-demo" element={<SignupFormDemo />} />
          <Route path="/signup-practice" element={<SignupFormPracticeConfirm />} />
          <Route path="/signup-stretch" element={<SignupFormStretchTerms />} />
        </Routes>
      </div>
    </>
  )
}

function Home() {
  return (
    <div className="container">
      {/* Home: preview sections linking to each lab */}
      <div className="section">
        <h2>Micro-Lab 1: Counter</h2>
        <p>Simple counter with +1 and Reset.</p>
        <Link className="button" to="/counterlab">Open Lab</Link>
      </div>
      <div className="section">
        <h2>Micro-Lab 2: To-Do List</h2>
        <p>Input, add items to state, render list.</p>
        <Link className="button" to="/todolab">Open Lab</Link>
      </div>
      <div className="section">
        <h2>Micro-Lab 3: Window Width</h2>
        <p>Track window width using useEffect.</p>
        <Link className="button" to="/windowwidthlab">Open Lab</Link>
      </div>
      <div className="section">
        <h2>Guided Demo – Signup Form</h2>
        <p>Name, Email, Password with Zod validation.</p>
        <Link className="button" to="/signup-demo">Open Demo</Link>
      </div>
      <div className="section">
        <h2>Practice – Confirm Password</h2>
        <p>Add confirm password and validate it matches.</p>
        <Link className="button" to="/signup-practice">Open Practice</Link>
      </div>
      <div className="section">
        <h2>Stretch – Terms Checkbox</h2>
        <p>Require accepting Terms before submit.</p>
        <Link className="button" to="/signup-stretch">Open Stretch</Link>
      </div>
    </div>
  )
}

export default App
