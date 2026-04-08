import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
const App =()=> {
  return (
    <>
    <main className="py-3">
    <Header />
    <Container>
    <h1> Dobrodosli u skriptarnicu</h1>
    </Container>
    </main>
    <Footer />
    </>
  )
}
export default App