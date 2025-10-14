
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import NewProduct from '../pages/NewProduct'
import ProductList from '../pages/ProductList'
import About from '../pages/About'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
<Route path="/" element={<Main/>}/>
<Route path="/newproducts" element={<NewProduct/>}/>
<Route path="/products" element={<ProductList/>}/>
<Route path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default AppRouter