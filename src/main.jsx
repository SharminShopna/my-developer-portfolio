import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import ProjectDetails from './components/ProjectDetails';
// import AboutMe from './components/AboutMe';
// import Skills from './components/Skills/Skills';
// import Projects from './components/Projects';
// import Language from './components/Language';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"details",
    element:<ProjectDetails></ProjectDetails>
  },
  // {
  //   path:"about",
  //   element:<AboutMe></AboutMe>
  // },
  // {
  //   path:"skills",
  //   element:<Skills></Skills>
  // },
  // {
  //   path:"projects",
  //   element:<Projects></Projects>
  // },
  // {
  //   path:"language",
  //   element:<Language></Language>
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
   
  </StrictMode>,
)
