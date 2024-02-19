import { CiLinkedin } from "react-icons/ci";
import { FaGithub} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="text-secondColor font-nunito">
      <div className="border-t-2 border-secondColor"></div>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href="/" target="_self" className="flex font-bold items-center md:justify-start justify-center">
        <motion.div 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}>  <span className="ml-3 text-3xl">Pyramid</span></motion.div>
        </a>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2024 Pyramid —
          <a href="/" className="ml-1" rel="noopener noreferrer" target="_self" >@Chirag</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://www.linkedin.com/in/chiragbaweja/" target="blank">
            <CiLinkedin className="w-8 h-8 cursor-pointer hover:text-thirdColor" />
          </a>
          <a href="https://www.linkedin.com/in/chiragbaweja/" target="blank">
            <FaGithub className="w-8 h-8 cursor-pointer ml-1 mr-1 hover:text-thirdColor" />
          </a>
          <a href="https://www.linkedin.com/in/chiragbaweja/" target="blank">
            <CiMail className="w-8 h-8 cursor-pointer hover:text-thirdColor" />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer;