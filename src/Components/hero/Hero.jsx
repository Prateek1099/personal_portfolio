import "./hero.scss"
import {motion} from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity:0,
    },
    
    animate: {
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        },
        
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    
    animate: {
        x:"-220%" ,
        transition:{
            duration:20,
            repeat:Infinity,
            repeatType:"mirror",
    },
},

};

const Hero =()=>{
    return(
        
      
        <div className="hero">
            <div className="wrapper">

            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                {/* <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2> */}
                <motion.h1 variants={textVariants}>Project Prana</motion.h1>
           
            <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See the Latest Work</motion.button>
            <motion.button variants={textVariants}>Contact Us</motion.button>
            </motion.div>

            <motion.img variants={textVariants} animate= "scrollButton" src="/scroll.png" alt="scrolldown image" />
            </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Thinker Creator Influencer
            </motion.div>

            
        </div>
        
    );

};
export default Hero;