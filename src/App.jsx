
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Books from './pages/Books'
import Create from './pages/Create'
import Single from './pages/Single'
import Update from './pages/Update'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
    <>

      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/create' element={<Create />} />
          <Route path='/about' element={<About />} />
          <Route path='/single/:id' element={<Single />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>

      <Footer />

      </BrowserRouter>

    </>
  )
}

export default App
