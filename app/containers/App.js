import React from 'react'
import Menu from 'components/Menu'

const App = props => (
  <div>
    <Menu />
    {props.route.path !== '/' ? <Menu /> : null}
    {props.children}
  </div>
)

export default App
