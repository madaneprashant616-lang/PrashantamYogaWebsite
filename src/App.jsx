import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ padding: '20px', background: 'red', color: 'white' }}>
        <h1>NAVBAR TEST</h1>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
      <div style={{ padding: '20px', background: 'purple', color: 'white' }}>
        <h1>FOOTER TEST</h1>
      </div>
    </div>
  )
}

export default App