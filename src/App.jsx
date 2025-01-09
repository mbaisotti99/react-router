import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"

function App() {
  return(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contacts" element={<ContactPage />} />
  </Routes>
 </BrowserRouter>
  )
}

export default App
