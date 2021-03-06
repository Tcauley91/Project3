import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import httpClient from './httpClient'

import NavBar from './NavBar'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import SignUp from './views/SignUp'
import Games from './views/Games'
import Leaderboard from './views/Leaderboard'
import Pong from './views/Pong'
import FlappyBird from './views/FlappyBird'
import Home from './views/Home'

class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() }

  onLoginSuccess(user) {
    this.setState({ currentUser: httpClient.getCurrentUser() })
  }

  logOut() {
    httpClient.logOut()
    this.setState({ currentUser: null })
  }

  render() {
    const { currentUser } = this.state
    return (
      <div>
      <NavBar currentUser={currentUser}/>
      <div className="AppContainer">
        <Switch>
          <Route
            path="/login"
            render={props => {
              return (
                <LogIn
                  {...props}
                  onLoginSuccess={this.onLoginSuccess.bind(this)}
                />
              )
            }}
          />
          <Route
            path="/logout"
            render={props => {
              return <LogOut onLogOut={this.logOut.bind(this)} />
            }}
          />
          {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
          <Route
            path="/signup"
            render={props => {
              return (
                <SignUp
                  {...props}
                  onSignUpSuccess={this.onLoginSuccess.bind(this)}
                />
              )
            }}
          />
          <Route
            path="/Games"
            render={() => {
              return currentUser ? <Games /> : <Redirect to="/login" />
            }}
          />
          <Route
            path="/Leaderboard"
            render={() => {
              return currentUser ? <Leaderboard /> : <Redirect to="/login" />
            }}
          />
          <Route
            path="/FlappyBird"
            render={() => {
              return currentUser ? <FlappyBird /> : <Redirect to="/login" />
            }}
          />
          <Route
            path="/Pong"
            render={() => {
              return currentUser ? <Pong /> : <Redirect to="/login" />
            }}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      </div>
    )
  }
}

export default App
