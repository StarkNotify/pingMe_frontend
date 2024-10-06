import React from 'react'

import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
        <h4>Main Layout</h4>
        <Outlet/>
    </div>
  )
}

export default Main