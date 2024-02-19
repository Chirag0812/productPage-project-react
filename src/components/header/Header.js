import { motion } from 'framer-motion';
import stc from '../../assets/img/stc.jpg'
import { useRef } from "react";


function Header() {
  const constraintsRef = useRef(null);

  const myText = "If Shopping doesn't make you happy ,than you are in the wrong shop.";
  const MainText = myText.split(" ");

  return (
    <>
      <header>
        <section className="text-firstColor bg-secondColor font-nunito">
          <div className="flex flex-wrap">

            <div className="lg:w-1/2 lg:h-96 sm:h-64 p-16">
              <motion.div className="lg:w-1/32 sm:w-1/10 md:w-1/16 my-[20px] gap-1" ref={constraintsRef} />
              <motion.p
                className="text-3xl cursor-pointer text-wrap"
                initial="hidden"
                whileHover={{ scale: 1.05 }}
                animate="visible"
                whileDrag={{ scale: 1.3, transition: { duration: 1.5 } }}
                drag dragConstraints={constraintsRef}
              >
                {MainText.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 3,
                      delay: i / 8,
                    }}
                    key={i}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
                <button className='bg-thirdColor text-sm rounded-lg' type="button  ">Drag</button>
              </motion.p>
            </div>

            <div className="lg:w-1/2 md:w-full bg-firstColor">
              <div className="flex items-center justify-center sm:flex-row flex-col">
                <img className="w-full h-full" alt="loading" src={stc} />
              </div>
            </div>
          </div>
        </section>
      </header>

    </>
  )
}

export default Header;

