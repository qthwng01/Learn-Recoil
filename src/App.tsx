import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListAnime from './components/list-anime'
import Cart from './components/cart'

function App() {
  return (
    <div className="min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/" element={<ListAnime />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
