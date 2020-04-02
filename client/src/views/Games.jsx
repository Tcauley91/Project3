import React from 'react'
import { Link } from 'react-router-dom'
import ball from '../images/ball_game.jpg'
import pong from '../images/pong.jpg'

const Games = () => {
  return (
<div class="container">
  <div class="row">
    <div className="col-md-6 d-flex justify-content-center">
    <Link to="/FlappyBird">
    <img src={ball} alt="ball_game" className="gameApps"/>
      </Link>
    </div>
    <div class="col-md-6 d-flex justify-content-center">
    <Link to="/Pong">
    <img src={pong} alt="ball_game" className="gameApps"/>
      </Link>
    </div>
  </div>
  </div>
  )

}

export default Games
