import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import ResultDetails from './pages/ResultDetails'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results/:number" element={<ResultDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
