import "./navbar.scss"
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";


const Navbar = () => {
    return(
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                    initial={{opacity:0.5, scale: 0.5}} 
                    animate={{opacity:1, scale:1}}
                    transition={{duration: 0.5}}
                    className="span"
                >
                    Alex Dev
                </motion.span>
                <div className="social">
                    <a href="#">
                        <img src="/public/facebook.png" alt=""/>
                        <img src="/public/instagram.png" alt=""/>
                        <img src="/public/youtube.png" alt=""/>
                        <img src="/public/dribbble.png" alt=""/>
                    </a>

                </div>
            </div>
            
        </div>
    )
}

export default Navbar;