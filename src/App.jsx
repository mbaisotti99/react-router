import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import "bootstrap/dist/css/bootstrap.min.css"
import PizzaDetails from "./PizzaDetails"
import NotFoundPage from "./NotFoundPage"

function App() {

  return(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contacts" element={<ContactPage />} />

    <Route path="/pizza">
      <Route index element={<HomePage />} />
      <Route path=":id" element={<PizzaDetails />} />
    </Route>
  <Route path="*" element={<NotFoundPage />}/>
  </Routes>
 </BrowserRouter>
  )
}

export default App
