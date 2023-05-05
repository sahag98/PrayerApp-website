import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

function App() {

  return (
    <>
      <Navbar />
      <main className='app'>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
