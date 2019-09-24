import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import  Navigation  from './parts/navigation';
import  Home  from './pages/home';
import  News  from './pages/news';
import  Profile  from './pages/profile';
import  Login  from './pages/login';
import  Page404  from './pages/404';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/news' component={ News }/>
                    <Route path='/profile' component={ Profile }/>
                    <Route path='/login' component={ Login }/>
                    <Route component={Page404} />
                </Switch>
            </React.Fragment>    
        );
    }
}

export default App;
