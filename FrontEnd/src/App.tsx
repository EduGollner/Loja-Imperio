import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './routes/HomePage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<HomePage />}>
</Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
