// App.jsx
import { Routes, Route } from "react-router-dom"
import Yatta from "./test/Yatta"
import Regis from "./test/Regis"
import Tabelytta from "./test/Tabel"
import EditYatta from "./test/Editdata"
import Dasbor from "./test/Dasbor"
import TabelRegister from "./test/TabelRgs"
 
const App = () => {
  return (
    <Routes>
      <Route path="/h" element={<Yatta />} />
      <Route path="/R" element={<Regis />} />
      <Route path="/V" element={<Tabelytta />} />
      <Route path="/G" element={<EditYatta />} />
      <Route path="/Y" element={<Dasbor />} />
      <Route path="/K" element={<TabelRegister />} />
    </Routes>
  )
}

export default App
