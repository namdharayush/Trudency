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
import PayrollOutsourced from './Templates/Services/PayrollOutsourced.jsx'
import FinancialDirector from './Templates/Services/FinancialDirector.jsx'
import LimitedCompany from './Templates/Specialisms/LimitedCompany.jsx'
import CorporateAccounting from './Templates/Specialisms/CorporateAccounting.jsx'
import Accounting from './Templates/Specialisms/Accounting.jsx'
import OurProcess from './Templates/About-Us/OurProcess.jsx'

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
          
          {
            path:'/about-us/case-studies',
            element:<CaseStudies />
          },
          {
            path:'/about-us/our-process',
            element:<OurProcess />
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
          
          {
            path:'/services/payroll-outsourcing',
            element:<PayrollOutsourced />
          },
          {
            path:'/services/financial-director-services',
            element:<FinancialDirector />
          },
        ]
      },
      {
        path: '/specialisms',
        children:[
          {
            path:'/specialisms/limited-company-accounting/',
            element:<LimitedCompany />
          },
          
          {
            path:'/specialisms/corporate-accounting/',
            element:<CorporateAccounting />
          },
          
          {
            path:'/specialisms/accounting-for-letting-agents/',
            element:<Accounting />
          },
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
