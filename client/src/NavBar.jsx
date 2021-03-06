import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = props => {
  return (
    <div className="NavBar">
      {props.currentUser ? (
        // there is a user logged in
        <span>
          <Link to="/Games"><strong>Games</strong></Link>
          <Link to="/Leaderboard"><strong>Leaderboards</strong></Link>
          <Link to="/logout"><strong>Log Out</strong></Link>
        </span>
      ) : (
        // there is not a user logged in
        <span></span>
      )}
    </div>
  )
}

export default NavBar
