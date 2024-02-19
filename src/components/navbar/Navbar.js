import { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { getCartTotal } from "../../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/imageszvd.png";
import User from "../user/User";
import { motion } from 'framer-motion'

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favoritePage = () => {
    navigate('/favorites');
  };

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch]);

  return (
    <nav className="flex flex-wrap flex-col md:flex-row items-center justify-between px-20 py-3">
      <Link to="/">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <img className="w-[180px]" src={logo} alt="logo" />
        </motion.div>
      </Link>
      <div className="flex font-nunito space-x-44">
       
        <ul className="text-xl flex font-bold space-x-7 w-25 justify-between cursor-pointer">
          <Link to="/home">
            <motion.li 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}> Shop </motion.li>
          </Link>
          <motion.li 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}><li className="hover:text-thirdColor" onClick={favoritePage}>Favourites</li></motion.li>
          <motion.li 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}><li className="hover:text-thirdColor" onClick={() => navigate("cart")}>Payments</li></motion.li>
        </ul>
      </div>
      <div className="flex items-center">
        <User />
            <CiHeart
          onClick={favoritePage}
          className="w-9 h-9 ml-3 cursor-pointer hover:text-thirdColor" />
             <CiShoppingCart
          onClick={() => navigate("cart")}
          className="w-9 h-9 ml-3 cursor-pointer hover:text-thirdColor" />
      </div>
    </nav>
  )
}

export default Navbar;

