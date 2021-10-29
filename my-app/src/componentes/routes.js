import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import funcComponents from './funcComponents'
import cliente from './cliente'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={cliente} path="/" exact />
      <Route component={funcComponents} path="/produtos" exact />
    </BrowserRouter>
  )
}

export default Routes
