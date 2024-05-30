import React from 'react'
import { Outlet } from 'react-router'

const Parent = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Parent
