import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllCategory from './pages/CategoryPage'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MySlider from './pages/HomePg';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className='bg-firstColor'> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MySlider />} />
          <Route path="/home" element={<AllCategory />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;