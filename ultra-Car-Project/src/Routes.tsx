import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Clients from "./pages/Clients"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Stock from "./pages/Stock"


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/clients" element={ <Clients /> } />
        <Route path="/stock" element={<Stock />} />
        <Route path="*" element={ <Login /> }/>
      </Routes>
    </BrowserRouter>
  )
}