/*
*  Name_file :App.js
*  Description: redirije a routes.js
*/
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthService from './services/authenticity/auth-service.js';
import Login from './components/pages/login/Login.js';
import Home from './components/pages/home/Home.js';
import Register from './components/pages/login/register.js';
import Profile from './components/pages/login/profile.js';
import TeacherBoard from '../src/components/pages/teacher/TeacherBoard.js';
import StudentBoard from '../src/components/pages/student/StudentBoard.js';
//import links from './links/links-Teacher';
import { Container } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles/Navbar.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      currentUser: undefined,
      showStudent: false,
      showTeacher: false,
      showAdmin: false,
    };
  }

  componentDidMount(){
    //Take info about server
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showStudent: user["rol"].includes("S"),
        showTeacher: user["rol"].includes("T"),
        showAdmin: user["rol"].includes("A"),
      });
    }

  }

  logOut(){
    AuthService.logout();
  }

  render(){
    const { currentUser, showStudent, showTeacher, showAdmin } = this.state;
    return (
      <Router>
        <Container maxWidth="xl">
          <nav>
            {currentUser ? (
              <div>
                <li><a href="/login" onClick={this.logOut}>Logout</a></li>
                <li><Link to={"/profile"} >{currentUser.username}</Link></li>
              </div>
            ):(
                <div>
                  <li><Link to={"/home"}>Home</Link></li>
                  <li><Link to={"/login"} >Login</Link></li>
                  <li><Link to={"/register"}>Sign Up</Link></li>
                </div>
              )}

            {showAdmin && (
              <li><Link to={"/admin"}>Admin dashboard</Link></li>
            )}
            {showStudent && (
              <li><Link to={"/student"}> Student dashboard</Link></li>
            )}

            {showTeacher && (
              <li><Link to={"/teacher"}>Teacher dashboard</Link></li>
            )}
          </nav>

          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/admin' component={Register} />
              <Route exact path='/teacher' component={TeacherBoard} />
              <Route exact path='/student' component={StudentBoard} />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}


export default App;
