import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile.jsx'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background.jsx'
import Dot from './components/Dot.jsx'


const App = () => {
  return (
    <div className='bg-[#161513] min-h-screen min-w-screen text-white p-4'>

      
      <Dot/>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App