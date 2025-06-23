import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
   <div className="App bg-primary font-body min-h-screen">
   <Navbar/>
   <Outlet/>
   <Footer/>
   </div>
  )
}

export default App
