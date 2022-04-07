import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Header/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route  exact path="/products" element={<Product/>}/>
       <Route  exact path="/products/:id" element={<ProductDetail/>}/>
       <Route  exact path="/cart" element={<Cart/>}/>
       <Route  exact path="/checkout" element={<Checkout/>}/>
       <Route  exact path="/about" element={<About/>}/>
       <Route  exact path="/contact" element={<Contact/>}/>
       <Route path="*"/>
     </Routes>
     <Footer/>
     </Router>
    </>
  );
}

export default App;
