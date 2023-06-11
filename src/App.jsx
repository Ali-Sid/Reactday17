import { Component } from 'react'
// import PropTypes from 'prop-types';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Challenges from './Components/Challenges'
import NotFound from './Components/NotFound'
import NavBar from './Components/NavBar'
import States from './Components/ChallengesFolder/States'
import Props from './Components/ChallengesFolder/Props'
import Classes from './Components/ChallengesFolder/Classes'
import Hoc from './Components/ChallengesFolder/HOC'
import ReactRouter from './Components/ChallengesFolder/ReactRouter'
import ReactHooks from './Components/ChallengesFolder/ReactHooks'
import Login from './Components/Login'

// Home component
// const Home = () => <h1>Welcome Home</h1>

// About component
// const About = () => <h1>About Us</h1>

// Contact component
// const Contact = () => <h1>Contact Us</h1>



export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };


  render() {
    const { isLoggedIn } = this.state;
    return (
      <Router>
        <div className='App'>
          <NavBar isLoggedIn={isLoggedIn} onLogout={this.handleLogout} />
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login onLogin={this.handleLogin} isLoggedIn={isLoggedIn}/>}/>
          <Route exact path='/about' element={<About />} />
          <Route exact strict path='/contact' element={<Contact />} />
          {isLoggedIn ? (
          <Route path='/challenges' element={<Challenges />} />
          ) : (
          <Route path='/challenges' element={<Navigate to='/' />} />
          )}
          <Route exact strict path='/challenges/states' element={<States />}/>
          <Route exact strict path='/challenges/props' element={<Props />}/>
          <Route exact strict path='/challenges/classes' element={<Classes />}/>
          <Route exact strict path='/challenges/hoc' element={<Hoc />}/>
          <Route exact strict path='/challenges/react-router' element={<ReactRouter />}/>
          <Route exact strict path='/challenges/react-hooks' element={<ReactHooks />}/>
          <Route path='*' element={<NotFound />}/>
          {/* '*' is used in the above route path if the user clicks on the path that is not matched with the above mentioned paths- it is called as wildcard path */}
          </Routes>
        </div>
      </Router>
    )
  }
}

// App.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

