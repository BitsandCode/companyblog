import React from 'react'
import { Switch, Route } from 'react-router-dom'
import homeRoute from './home'

export default function () {
       return(
           <Switch>
             <Route exact path={homeRoute.path} component={homeRoute.component}/>
           </Switch>
       )
}