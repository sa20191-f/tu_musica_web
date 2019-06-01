import React, { Component } from 'react'


import Header from './Header'
import Play from './Play'
import Lists from './Lists'
import Login from './Login'
import Signup from './SignUp'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


export default class Router extends Component{
    

    render(){
        
        return( 
            <BrowserRouter>
                <div>
                <Switch>
                    <Route exact path="/" component={Header} />
                    <Route exact path="/play" component={Play} />
                    <Route exact path="/lists" component={Lists} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>

                </div>

            </BrowserRouter>


        )
    }
}