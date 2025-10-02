// App.jsx
import { Routes, Route } from "react-router-dom"
import Yatta from "./test/Yatta"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Yatta />} />
    </Routes>
  )
}

export default App
