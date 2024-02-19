
import { removeFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { CgClose } from 'react-icons/cg';
import { motion } from 'framer-motion';

const variants = {
  rotate: { rotate: [0, -30, 0], transition: { duration: 0.5 } },
  stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 3 } }
};
const variant = {
  rotate: { rotate: [0, -30, 0], transition: { duration: 0.5 } },
  stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 4 } }
};


const CartComp = ({ cart,rotate }) => {
    const dispatch = useDispatch();

    return (
        <div className="font-nunito mx-auto justify-center px-6 md:flex md:space-x-6 xl:px-0 rounded-lg">
            <div className="w-90 md:w-[950px] bg-white border border-thirdColor rounded-lg shadow mb-7 p-5">
                <div className="justify-between sm:flex sm:justify-start">
                    <motion.img
                        variants={variants}
                        animate={rotate ? 'rotate' : 'stop'}
                        className="w-full rounded-lg sm:w-40"
                        src={cart?.image}
                        alt="product"
                    />
                    {/* <img src={cart?.image}  className="w-full rounded-lg sm:w-40" /> */}
                     <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between pt-6 sm:mt-0">
                    <motion.h2
                        variants={variant}
                        animate={rotate ? 'rotate' : 'stop'}
                         className="text-xl font-bold text-secondColor">{cart?.title}
                   </motion.h2> </div>
                    <div className="mt-5 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center justify-between space-x-24 pt-6">
                            <p className="text-lg font-bold text-thirdColor">${cart?.price}</p>
                            <p className="text-lg font-bold text-thirdColor">({cart?.quantity})</p>
                            <CgClose onClick={() => dispatch(removeFromCart(cart?.id))} className="h-7 w-7 cursor-pointer duration-150 hover:text-red-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CartComp;
;
