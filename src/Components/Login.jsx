import { Component, createRef } from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.usernameRef = createRef()
        this.passwordRef = createRef()
        this.state = {
            isLoggedIn: false
        }
    }

    handleLogin = () => {
        const username = this.usernameRef.current.value
        const password = this.passwordRef.current.value

        if(username !== '' && password !== '') {
            this.props.onLogin()
            // Call the onLogin function passed via props
            this.setState({isLoggedIn: true})
        }
    }

    handleKeyDown = (event) => {
      if(event.key === 'Enter') {
        this.handleLogin()
      }
    }

    componentDidUpdate(prevProps) {
      if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
        if (this.props.isLoggedIn) {
          return <Navigate to="/challenges" />;
        }
      }
    }


  render() {
    const {isLoggedIn} = this.state

    if(isLoggedIn){
        return <Navigate to="/challenges" />
        // In the new version of react-router-dom v6: the <Redirect /> is changed to <Navigate />
    }

    return (
      <div className='login-container'>
        <h1>Login Page</h1>
        <input type="text" placeholder='Username' ref={this.usernameRef} onKeyDown={this.handleKeyDown}/>
        <input type="password" placeholder='Password' ref={this.passwordRef} onKeyDown={this.handleKeyDown}/>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

/*
onLogin: PropTypes.func.isRequired: This line specifies that the onLogin prop should be a function and it is required. The func type ensures that the prop value is a function, and isRequired enforces that the prop must be provided when using the Login component.

isLoggedIn: PropTypes.bool.isRequired: This line specifies that the isLoggedIn prop should be a boolean and it is required. The bool type ensures that the prop value is a boolean, and isRequired enforces that the prop must be provided when using the Login component.

By defining prop types using PropTypes, you can catch potential errors during development where the wrong type of value is passed to a component or if required props are not provided. It helps ensure the correctness and integrity of the props used by the component.
*/
