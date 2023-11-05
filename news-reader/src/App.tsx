import { Container } from "react-bootstrap"
import "./App.css"
import News from "./features/news/News"
import { Navbar } from "./features/layout/Navbar"

function App() {
  return (
    <Container className="d-flex flex-column h-100">
      <Navbar />
      <News />
    </Container>
  )
}

export default App
