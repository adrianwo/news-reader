import { Container } from "react-bootstrap"
import "./App.css"
import News from "./features/news/News"
import { Navbar } from "./features/layout/Navbar"
import Footer from "./features/layout/Footer"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <Container className="d-flex flex-column h-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
