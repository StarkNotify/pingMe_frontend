import { useState } from 'react';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';

// library imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Main } from './layouts';
import { Error } from './components';
import { HomePage } from './pages';

function App() {

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Main/>,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <HomePage/>,
          errorElement: <Error/>,
        }]
    }
  ])

  return (
    <div className=''>
       <RouterProvider router={router}/>
       <ToastContainer/>
    </div>
  )
}

export default App
