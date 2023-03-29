import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar-components/navbar'
import Home from './components/home-components/home'
import About from './components/about-components/about'
import Contact from './components/contact-components/contact'
import Plans from './components/plans-components/plans'
import FreeWorkout from './components/free-workout-components/freeWorkout'
import SignIn from './components/sign-in-components/signIn'
import JoinUs from './components/join-us-comonents/joinUs'
import Gym from './components/free-workout-components/gym'
import Yoga from './components/free-workout-components/yoga'
import Aerobics from './components/free-workout-components/aerobics'

function App() {
  return (
    <div className="App">
      <h1 className='title'>FIT FOR LIFE</h1>
        <Router>
          <Navbar/>
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/about' Component={About}/>
              <Route path='/contact' Component={Contact}/>
              <Route path='/plans' Component={Plans}/>
              <Route path='/freeWorkout' Component={FreeWorkout}/>
              <Route path='/sign-in' Component={SignIn}/>
              <Route path='/join-us' Component={JoinUs}/>
              <Route path='/gym' Component={Gym}/>
              <Route path='/yoga' Component={Yoga}/>
              <Route path='/aerobics' Component={Aerobics}/>
              <Route path='/platinum' Component={SignIn}/>
              <Route path='/gold' Component={SignIn}/>
              <Route path='/silver' Component={SignIn}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App
