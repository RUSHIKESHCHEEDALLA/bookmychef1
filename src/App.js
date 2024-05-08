import Home from './Home'
import Bmchome from './Bmchome'
import Login from './Login'
import Register from './Register'
import Menu from './menu';
import Home1 from './Home1';
import CartPage from './Cart';
import Orders from './Orders';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App()  {
  return (
    <>
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/pickyourmenu' element={<Home1/>} />
        <Route path='/bmchome' element={<Bmchome/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/orders' element={<Orders/>} />
    </Routes>
  </BrowserRouter>
  </>
  )
}
export default App

