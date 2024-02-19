import img1 from '../../assets/img/img-slides/img1.jpg'
import img2 from '../../assets/img/img-slides/img2.jpg'
import img3 from '../../assets/img/img-slides/img3.jpg'
import img4 from '../../assets/img/img-slides/img4.jpg'
import img5 from '../../assets/img/img-slides/img5.jpg'
import img6 from '../../assets/img/img-slides/img6.jpg'
import { motion } from "framer-motion";

const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});


const Gallery = () => (
  <section
    className={`flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col `}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`flex-1 md:ml-10 ml-0 md:mt-0 mt-10 relative flex justify-center items-centre flex-col`}
    >
      <motion.h1
        variants={fadeIn("down", "tween", 0.2, 1.5)}
        className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-secondColor xs:leading-[76.8px] leading-[66.8px] w-full text-center tex-justify`}
      >
        Store Gallery
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex sm:flex-row flex-col"
      >
        <motion.img
          variants={fadeIn("right", "tween", 0.2, 1.5)}
          src={img3}
          alt=""
          className="md:w-[290px] w-[200px] md:my-10  my-2 md:mx-10  mx-2 object-contain"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.2, 1.5)}
          src={img2}
          alt=""
          className="md:w-[300px] w-[200px] my-10 md:mt-[200px] mt-5 object-contain"
        />
        <motion.img
          variants={fadeIn("left", "tween", 0.2, 1.5)}
          src={img1}
          alt=""
          className="md:w-[300px] w-[200px] md:my-10 my-2 md:mx-10 mx-2 object-contain"
        />
      </motion.div>

     <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex sm:flex-row flex-col"
      >
        <motion.img
          variants={fadeIn("right", "tween", 0.2, 1.5)}
          src={img4}
          alt=""
          className="md:w-[290px] w-[200px]  my-2 md:mx-10 mx-2 object-contain"
        />
        <motion.img
          variants={fadeIn("up", "tween", 0.2, 1.5)}
          src={img5}
          alt=""
          className="md:w-[300px] w-[200px]  md:mt-[200px] mt-5 object-contain"
        />
        <motion.img
          variants={fadeIn("left", "tween", 0.2, 1.5)}
          src={img6}
          alt=""
          className="md:w-[300px] w-[200px] my-5 md:mx-10 mx-2 object-contain"
        />
      </motion.div>

    </motion.div>
  </section>
);

export default Gallery;
