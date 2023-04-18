import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Services from "./pages/Services"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Stock from "./pages/Stock"
import Clients from "./pages/Clients"


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/services" element={ <Services /> } />
        <Route path="/stock" element={<Stock />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="*" element={ <Login /> }/>
      </Routes>
    </BrowserRouter>
  )
}