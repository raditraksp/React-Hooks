import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import Home from './Home'
import Favorites from './Favorites'
import Header from './Header'
import BasicUseEffect from '../theory/BasicUseEffect'

// context
import FavContextProvider from '../config/context/FavContext'

function App() {

   return(
      <BrowserRouter>
         <Header/>
         <div className="container" >
            <FavContextProvider>
               <Route path='/' exact component={Home}  />
               <Route path='/favorites' component={Favorites}  />
            </FavContextProvider>
            <Route path='/theory' component={BasicUseEffect}  />
         </div>
      </BrowserRouter>
   )
}

export default App;