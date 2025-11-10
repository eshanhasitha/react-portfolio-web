import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile.jsx'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import Dot from './components/Dot.jsx'
import Background from './components/Background.jsx'

const App = () => {
  return (
    <div className='relative bg-[#0F172A] min-h-screen text-[#F1F5F9]'>
      <Background />
      <Dot/>
      <Navbar/>
      
      <main className='relative z-10'>
        <Routes>
          <Route path='/' element={<Profile/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App