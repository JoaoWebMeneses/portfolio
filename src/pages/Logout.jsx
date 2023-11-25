import React from 'react'
import Root from '../components/Root'
import { Outlet } from 'react-router-dom'

function Logout() {
  return (
    <div>
        <Root></Root>
        <Outlet></Outlet>
    </div>
  )
}

export default Logout