import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

const DetailComp = ({ productDetail }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const addCart = () => {
        dispatch(addToCart({
            id: productDetail?.id,
            title: productDetail?.title,
            image: productDetail?.image,
            price: productDetail?.price,
            quantity: quantity
        }))
    };

    const notify = () => {
        toast('Added to the cart!', {
            icon: '🛒',
        });
    };

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increment = () => {
        setQuantity(quantity + 1);
    };

    return (
        <section className="text-gray-600 font-nunito overflow-hidden h-screen">
            <div className="container px-5 py-24 mx-auto max-lg:py-10 max-md:py-10">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[700px] h-64 object-cover object-center rounded" src={productDetail?.image} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 max-md:text-lg">{productDetail?.title}</h1>
                        <div className="flex mb-4 max-md:mb-1">
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a href="#\" className="text-gray-500">
                                    <CiFacebook size={27} />
                                </a>
                                <a href="#\" className="text-gray-500 mx-0.5">
                                    <CiTwitter size={27} />
                                </a>
                                <a href="#\" className="text-gray-500">
                                    <CiChat1 size={27} />
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed max-sm:text-sm">{productDetail?.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <span onClick={decrement} className="rounded bg-gray-100 py-1 px-3.5 duration-100 hover:bg-thirdColor hover:text-blue-50 cursor-pointer font-bold text-2xl">-</span>
                            <input className="h-7 w-10 border text-center text-xl font-semibold rounded bg-firstColor" type="text" value={quantity} />
                            <span onClick={increment} className="cursor-pointer rounded bg-gray-100 py-1 px-3.5 duration-100 hover:bg-thirdColor hover:text-blue-50 font-bold text-2xl">+</span>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${productDetail?.price}</span>
                            <button
                                onClick={addCart}
                                className="flex ml-auto text-white bg-thirdColor hover:bg-fourthColor border-0 py-2 px-6 focus:outline-none rounded-lg"
                            >
                                <CiShoppingCart onClick={notify} size={32} />
                                <Toaster
                                    position="top"
                                    reverseOrder={false}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailComp;