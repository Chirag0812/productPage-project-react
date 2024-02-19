import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../../redux/favoriteSlice";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from "framer-motion";
import { CiShoppingCart } from "react-icons/ci";
import { addToCart } from "../../redux/cartSlice";
import { useState } from "react";


const Product = ({ product, isFavorite }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quanty, setQuanty] = useState(1);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  // const callfn = () => {
  const increment = () => {
    setQuanty(quanty + 1);
  };
  const addCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: quanty
    }))
  };
  // }
  const notify = () => {
    toast('Added to the favorite!', {
      icon: '🤎',
    });
  };
  const notifyMe = () => {
    toast('Added to the Cart!', {
      icon: '🤎',
    });
  };

  return (

    <div className="font-nunito w-full h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow ml-6 mb-7">
     <motion.div
      whileHover={{ scale: [null, 1.3, 1.3] }}
      transition={{ duration: 0.3 }} >
         <img className="p-8 rounded-t-lg w-[350px] h-[400px]" src={product?.image} alt="" />
    </motion.div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-secondColor text-center">{product.title}</h5>
        <div className="flex items-center justify-center mt-2.5 mb-5">
          <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-fourthColor text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">{product?.rating?.rate}</span>
        </div>
        <div className="flex items-center justify-evenly">
          <span className="text-3xl font-bold text-gray-900 text-center">${product?.price}</span>
          <div className="flex items-center justify-between">
            <motion.button whileTap={{ scale: 0.65 }}><a
              onClick={() => navigate(`/products/${product?.id}`)}
              href="#\"
              className="text-white bg-thirdColor hover:bg-fourthColor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2.5 text-center ml-4"
            >
              For details
            </a></motion.button>
            <button
              className={"rounded-full w-10 h-10 bg-white p-0 border-0 inline-flex items-center  ml-2"}
              onClick={handleFavoriteClick}
            >
              <CiHeart onClick={notify} size={32} />
             
            </button>
            <button
              onClick={() => {
                increment();
                addCart();
              }}
              className="flex ml-auto text-white bg-thirdColor hover:bg-fourthColor border-0 py-2 px-1 focus:outline-none rounded-lg"
            >
              <CiShoppingCart onClick={notifyMe} size={32} />
              <Toaster
                position="top"
                reverseOrder={false}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;

