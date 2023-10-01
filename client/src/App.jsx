import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Commander from './Pages/Commander'
import Menu from "./Pages/Menu";
import LoginResto from "./PagesResto/LoginResto";
import Dashboard from "./PagesResto/DashboardCommands";
import Employer from "./PagesResto/Employer";
import PanierCommand from "./Pages/PanierCommand";

function App() {

  return (
<Router>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/Menu' element={<Menu/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Commander' element={<Commander/>}></Route>
      <Route path='/panier' element={<PanierCommand/>}></Route>

      <Route path='/LoginResto' element={<LoginResto/>}></Route>
      <Route path='/DashboardCommands' element={<Dashboard/>}></Route>
      <Route path='/DashboardEmployés' element={<Employer/>}></Route>
    </Routes>
    </Router>
  )
}

export default App
