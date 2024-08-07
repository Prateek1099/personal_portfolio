import{animate, motion,useInView} from "framer-motion"
import './Services.scss';
import { useRef } from "react";



const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
};
const Services = () => {

  const ref = useRef()
  const isInView= useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
     <motion.div className="textContainer" variants={variants}>
      
    
     </motion.div>
     <motion.div className="titleContainer" variants={variants}>
      <div className="title">
       
        <h1>
          <motion.b whileHover={{color:"orange"}}>Be Stronger</motion.b> 
        </h1>
        </div>

        <div className="title">
        <h1>
        <motion.b whileHover={{color:"orange"}}>than your Excuses</motion.b> 
        </h1>
        
        <button>WHAT WE DO</button>
        </div>
     
     </motion.div>

     <motion.div className="listContainer">

     <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
        <h2>Trainer</h2>

        <p>AI-controlled feature guides users in weight loss and fitness by recommending exercises based on weight and height input, and recommending activities that promote happiness.</p>
      <button>Go</button>
      </motion.div>

      <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
        <h2>Psychologist </h2>
        <p>One-on-one therapy sessions with therapists would be available in this feature to assist anyone dealing with mental health issues such as anxiety, sadness, irrational thought, self-doubt, etc.</p>
      <button>Go</button>
      </motion.div>

      <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
        <h2>Dietitian</h2>
        <p>The app provides nutrient information, daily recommended food dishes, and a diet chart for weight loss. It also recommends food items to reduce stress levels and aids in meal planning.</p>
      <button>Go</button>
      </motion.div>

      <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
        <h2>Publishing </h2>
        <p>Users can share personal stories and challenges. They can also read the content wrote by others Users can actively participate by sharing recommendations and reviews, fostering a supportive community and providing valuable insights.</p>
      <button>Go</button>
      </motion.div>
      
      <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
        <h2>Events</h2>
        <p>This feature would have the details of the past events held and future events that would be organised. We host meetups with fun activities to reduce stress, combat loneliness and build community among users.</p>
      <button>Go</button>
      </motion.div>
      
     </motion.div>
    </motion.div>
  );
};

export default Services;