import {Link, useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


/**
 * NavBar component that displays a navigation bar with links to different pages, a login link,
 * and a logout confirmation dialog.
 */


const NavBar = ({ isLoggedIn, onLogout }) => {
  // const [isBlocking, setIsBlocking] = useState(false)

  // State to manage the open/closed state of the logout confirmation dialog
  const [open, setOpen] = useState(false);

  // Navigate to the specified route when the user clicks a link
  const navigate = useNavigate()


  // const openDialog = () => {
  //   setOpen(true);
  // };
  

  // Open the logout confirmation dialog when the user clicks the logout link
  const handleLogOut = () => {
    // setIsBlocking(true) // Set blocking to true when logout link is clicked
    // onLogout()
    setOpen(true) // open the dialog
  }


  // Confirm the logout action and close the dialog, then navigate to the specified route
  const handlePromptConfirm = () => {
    // setIsBlocking(false) // Set blocking to false when prompt is confirmed
    setOpen(false)
    onLogout() // Call the onLogout function passed via props
  }


  // Cancel the logout action, close the dialog, and navigate to the specified route
  const handlePromptCancel = () => {
    // setIsBlocking(false) // Set blocking to false when prompt is cancelled
    setOpen(false)
    navigate('/challenges')
    
  }

  return (

   <div> 
    <nav className='navbar'>
              <ul className='navbar-list'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
                {isLoggedIn ? (
                  <>
                  {/* Show "Challenges" and "Logout" links when logged in */}
                  <li>
                    <Link to='/login' onClick={handleLogOut}>Logout</Link>
                  </li>
                  </>
                ) : (
                  // Show "Login" link when not logged in
                  <li>
                    <Link to='/login'>Login</Link>
                  </li>
                )}
                
                {/* <li>
                  <Link to='/login'>Login</Link>
                </li> */}
              </ul>
            </nav>
            <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Are you sure you want to log out?</DialogTitle>
            <DialogContent>Your changes may not be saved.</DialogContent>
            <DialogActions>
            <button onClick={handlePromptConfirm}>Confirm</button>
            <button onClick={handlePromptCancel}>Cancel</button>
            </DialogActions>
            </Dialog>
   </div>         
  )          
}

  NavBar.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired
  };

export default NavBar