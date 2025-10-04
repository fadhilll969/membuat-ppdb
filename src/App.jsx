// App.jsx
import { Routes, Route } from "react-router-dom"
import Yatta from "./test/Yatta"
import Regis from "./test/Regis"
const App = () => {
  return (
    <Routes>
      <Route path="/d" element={<Yatta />} />
      <Route path="/R" element={<Regis />} />
    </Routes>
  )
}

export default App
