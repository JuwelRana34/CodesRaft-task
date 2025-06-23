import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  return (
   <div className="App bg-primary font-body min-h-screen">
   <Navbar/>
   <Outlet/>
   </div>
  )
}

export default App
