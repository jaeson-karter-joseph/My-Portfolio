import "./hero.scss"
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },

    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-570%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
}

const Hero = () => {

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>JAESON KARTER JOSEPH</motion.h2>
                    <motion.h1 variants={textVariants} whileHover={{ color: "rebeccapurple" }}> Full Stack Web Developer</motion.h1>
                    <motion.h3 variants={textVariants}>React Angular <span className="button-text">•</span> MongoDB SQL <span className="button-text">•</span> NodeJS ASP.NET <span className="button-text">•</span>Azure AWS</motion.h3>

                    <motion.div className="buttons">
                        <motion.button variants={textVariants} whileHover={{border : "1px solid orange"}}><a href="#1">See My Latest Works</a> </motion.button>
                        <motion.button variants={textVariants} whileHover={{border : "1px solid orange"}}> <a href="#Contact">Contact Me</a>  </motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                UI/UX Designer AI Travel Fitness
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="Hero Picture" />
            </div>
        </div>
    );
}

export default Hero;