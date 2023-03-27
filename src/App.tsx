import './App.css'
import Home from './components/home-components/Home'
import Navbar from './components/navbar-components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/about-components/About'
import Contact from './components/contact-components/Contact'
import Plans from './components/plans-components/Plans'
import FreeWorkout from './components/free-workout-components/FreeWorkout'
import SignIn from './components/sign-in-components/SignIn'
import JoinUs from './components/join-us-comonents/JoinUs'
import Gym from './components/free-workout-components/Gym'
import Yoga from './components/free-workout-components/Yoga'
import Aerobics from './components/free-workout-components/Aerobics'

function App() {
  return (
    <div className="App">
      <h1 className='title'>FIT FOR LIFE</h1>
        <Router>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/plans' element={<Plans/>}/>
            <Route path='/freeWorkout' element={<FreeWorkout/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/join-us' element={<JoinUs/>}/>
            <Route path='/gym' element={<Gym/>}/>
            <Route path='/yoga' element={<Yoga/>}/>
            <Route path='/aerobics' element={<Aerobics/>}/>
            <Route path='/platinum' element={<SignIn/>}/>
            <Route path='/gold' element={<SignIn/>}/>
            <Route path='/silver' element={<SignIn/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App
