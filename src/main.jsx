import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Templates/HomePage.jsx'
import AboutPage from './Templates/About-Us/AboutPage.jsx'
import MainHomePage from './Templates/MainHomePage.jsx'
import { Provider } from 'react-redux'
import MainStore from './store/MainStore.jsx'
import ContactPage from './Templates/ContactPage.jsx'
import PageNotFound from './Templates/PageNotFound.jsx'
import MeetTheTeam from './Templates/About-Us/MeetTheTeam.jsx'
import CaseStudies from './Templates/About-Us/CaseStudies.jsx'
import BookkeepingService from './Templates/Services/BookkeepingService.jsx'
import OutsourcedAccounting from './Templates/Services/OutsourcedAccounting.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainHomePage />
      },
      {
        path: '/about-us',
        children:[
          {
            path:'/about-us/meet-the-team',
            element:<MeetTheTeam />
          },
          
          // {
          //   path:'/about-us/our-process',
          //   element:<PageNotFound />
          // },
          {
            path:'/about-us/case-studies',
            element:<CaseStudies />
          },

        ]
      },
      
      {
        path: '/services',
        children:[
          {
            path:'/services/bookkeeping-services',
            element:<BookkeepingService />
          },
          
          {
            path:'/services/outsourced-accounting-services',
            element:<OutsourcedAccounting />
          },
          // {
          //   path:'/about-us/case-studies',
          //   element:<CaseStudies />
          // },

        ]
      },

      {
        path: '/contact-us',
        element: <ContactPage />
      },
      {
        path :'*',
        element : <PageNotFound />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={MainStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
