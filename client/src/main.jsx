import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { lazy } from 'react'
import './index.css'
import { createBrowserRouter,RouterProvider, UNSAFE_LocationContext } from 'react-router-dom'
import Loader from './Components/Loader.jsx'
import Salespage from './pages/Salespage.jsx'
import ClientCreation from './pages/ClientCreation.jsx'
import { Provider } from 'react-redux'
import store from './stores/store.js'
import ButtonComponent from './Components/ButtonComponent.jsx'
import Protected from './Components/AuthLayout.jsx'
const Login= lazy(()=>import("./pages/Loginpage.jsx"))
const Contact=lazy(()=>import("./Components/Contact.jsx"))
const router=createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/contactUs",
          element:<Contact/>
        },
        {
          path:"/login",
          element:(
          <Protected authenticaion={false}>
          <Login/>
          </Protected>)
        },
        {
          path:"/salerequest",
          element:<Salespage/>
        },
        {
          path:"/clientCreation",
          element:<ClientCreation/>
        },
        {
          path:"/dashboard",
          element:(
          <Protected authenticaion={false}>
          <ButtonComponent/>
          </Protected>)
        }
      ]
    }
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loader/>}>
    <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
    </Suspense>
  </StrictMode>,
)
