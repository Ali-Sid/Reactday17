import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GoBack extends Component {
  render() {
    return (
      <Link to='/challenges'>
      <button>Go Back</button>
      </Link>
    )
  }
}
