import { Container } from "react-bootstrap"
import "./App.css"
import News from "./features/news/News"
import { Navbar } from "./features/layout/Navbar"
import Footer from "./features/layout/Footer"
import { Routes, Route, Navigate } from "react-router-dom"
import SideBar from "./features/layout/SideBar"
function App() {
  return (
    <Container className="p-0">
      <Navbar />
      <div className="d-flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/country/:code" element={<News />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </Container>
  )
}

export default App
