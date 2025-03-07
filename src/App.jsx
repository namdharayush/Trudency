import { Outlet } from 'react-router-dom'
import HeaderMenu from './Templates/Components/HeaderMenu'
// import Header from './Templates/Components/Header'
// import Footer from './Templates/Components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

function App() {
  return (
    <>
    <HeaderMenu />
    <Outlet />
    </>
  )
}

export default App
