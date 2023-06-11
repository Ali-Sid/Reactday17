// 30-days-of-react-challenge: Day 17: React Router

// Exercises: Level 1:
// 1. What package do you use to implement routing in react?
// react-router-dom package is used to implement routing in react.

// 2. What is the default export in react-router-dom?
//  The default export from the react-router-dom library is the BrowserRouter component.

// 3. What is the use of the following Components(Route, NavLink, Switch, Redirect, Prompt)
// Route: The Route component is used to define the mapping between a specific URL path and the corresponding component to render. It is typically used as a child component of a router component (such as BrowserRouter) and accepts properties like path and component or render to define the URL path and the component to render when the path matches.
// NavLink: the Link (NavLink is called Link in React Router V6) component is used to navigate around the application. It's like an anchor <a> tag as in HTML.
// Switch: In React Router v6, it's called 'Routes', it wraps all the <Route> component. It helps in rendering exclusive routes and ensures that only one route is rendered at a time. This is useful when you want to render a "404 Not Found" page when no routes match the URL.
// Redirect: In v6, it's called as 'Navigate'. It is used to redirect the user to a different URL. It is typically used inside Routes component. When this type of component is rendered, it will redirect from current URL to the specified 'to' URL.
// Prompt: Prompt component is no longer supported in React Router v6, instead you need to create your own version of Prompt component. It is typically used to prompt the user with a confirmation dialog box before leaving the current page or navigating to a different URL. It is typically used to prevent accidental navigation or to warn the user about unsaved changes.
// In this project, I have used Dialog component from mui/material.
// Inside a Dialog component, DialogTitle is used to display the title on the dialog box, DialogContent for the content/message that you want to give to the user to warn before moving to other URL and DialogActions for the action the user has to take after reading the dialog box, like 'confirm' and 'cancel'.


// Exercise: Level 2:
// Now, you know about React router. Build your portfolio with React and implement React router for navigation.
// Refer Explorer section, I have built a React-challenges website, in which I have used navigation to move from one URL to another and used other routing concepts which is supported in v6 and used third-party library like material ui.