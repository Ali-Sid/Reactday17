# Login Component Documentation

## Overview

The `Login` component is a functional React class component responsible for rendering a login page with username and password input fields, and a login button. The component uses the `react-router-dom` library for handling navigation and conditional rendering based on the `isLoggedIn` state.

## Class Definition

```javascript
import { Component, createRef } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Login extends Component {
  // ...
}
```

## State

The `Login` component has a local state called `isLoggedIn`, which is initially set to `false`. This state is used to determine whether the user is logged in or not.

```javascript
constructor(props) {
  super(props);
  this.usernameRef = createRef();
  this.passwordRef = createRef();
  this.state = {
    isLoggedIn: false,
  };
}
```

## Props

The `Login` component accepts two props:

- `onLogin`: A function that is called when the user successfully logs in. This function is passed via the `Login` component's parent component.
- `isLoggedIn`: A boolean value that is used to determine whether the user is logged in or not. This prop is also passed via the `Login` component's parent component.

```javascript
Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
```

## handleLogin Method

The `handleLogin` method is responsible for handling the login process. an invalid login attempt, the method updates the `isLoggedIn` state to `false`. If the login attempt is successful (i.e., both the username and password are not empty), the `onLogin` function is called, and the `isLoggedIn` state is updated to `true`.

```javascript
handleLogin = () => {
  const username = this.usernameRef.current.value;
  const password = this.passwordRef.current.value;

  if (username !== '' && password !== '') {
    this.props.onLogin();
    this.setState({ isLoggedIn: true });
  }
};
```

## componentDidUpdate Method

The `componentDidUpdate` lifecycle method is used to listen for changes in the `isLoggedIn` prop.  When the `isLoggedIn` prop changes to `true`, the `Navigate` component is rendered to navigate to the challenges page. 

```javascript
componentDidUpdate(prevProps) {
  if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
    if (this.props.isLoggedIn) {
      return <Navigate to="/challenges" />;
    }
  }
}
```

## Render Method

The `render` method checks the `isLoggedIn` state to conditionally render the `Navigate` component for navigating to the challenges page when the user is logged in. 

```javascript
render() {
  const { isLoggedIn } = this.. 
  if (isLoggedIn) {
    return <Navigate to="/challenges" />;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder='Username' ref={this.usernameRef}/>
      <input type="password" placeholder='Password' ref={this.passwordRef}/>
      <button onClick={this.handleLogin}>Login</button>
    </div>
  )
}
```

## Summary

The `Login` component is a simple login page with username and password input fields and a login button. /submit button. (depending on the styling of the component). It uses the `react-router-dom` library to handle navigation based on the user's login status. relying on the `isLoggedIn` prop. When the user successfully logs in, the component updates the `isLoggedIn` state to `true` and navigates to the challenges page.
``` 