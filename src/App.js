import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import LoginPage from "./components/login/LoginPage";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import UsersManagementPage from "./components/usersManagement/UsersManagementPage";
import {UserProvider} from "./components/context/UserContext";

function App() {

  return (

      <BrowserRouter>
        <UserProvider>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path='/' render={() => {
                return(
                    localStorage.getItem('token') ?
                        <Redirect to='/user' /> :
                        <Redirect to='/login' />
                )
              }}/>
              <Route  path='/login' component={LoginPage}/>
              <Route  path='/user' component={UsersManagementPage} />
            </Switch>
          </div>
        </UserProvider>
      </BrowserRouter>
  );
}

export default App;
