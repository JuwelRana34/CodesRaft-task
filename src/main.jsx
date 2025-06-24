import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './route/Router'
import { Suspense } from 'react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<p>loading...</p>}>
      <RouterProvider router={Router} />
    </Suspense> 
  </StrictMode>,
)
