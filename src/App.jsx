import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ErrorPage from "./pages/ErrorPage"
import Films from "./pages/Films"
import WeddingGallery from "./pages/WeddingGallery"

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/films" element={<Films/>}/>
      <Route path="/gallery" element={<WeddingGallery/>}/>
      <Route path="/*" element={<ErrorPage/>}/>
     </Routes>
    </div>
  )
}

export default App
