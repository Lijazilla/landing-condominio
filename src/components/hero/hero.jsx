import "./hero.scss";
import { motion } from "framer-motion";

const textVarians = {
    initial: {
        x:-500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Hero = () => {    
    return(
        <div className="hero">
            <div className="wrapper">
                <motion.div 
                    className="textContainer" 
                    variants={textVarians}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVarians}>Alex Jimenez</motion.h2>
                    <motion.h1 variants={textVarians}>Web Developer and UI designer</motion.h1>
                    <motion.div className="buttons" variants={textVarians}>
                        <button>See the lattes works</button>
                        <button>Contact Me</button>
                    </motion.div>
                    <motion.img src="../../../public/scroll.png" alt="" variants={textVarians} />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer">
                Writer Content Creator Influencer
            </motion.div>
            <div className="imageContainer">
                <img src="../../../public/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;