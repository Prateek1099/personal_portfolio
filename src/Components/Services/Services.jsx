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
      <p>I focus on helping your brand grow
        <br /> and move forward
      </p>
      <hr />
     </motion.div>
     <motion.div className="titleContainer" variants={variants}>
      <div className="title">
        <img src="/people.webp" alt="" />
        <h1>
          <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
        </h1>
        </div>

        <div className="title">
        <h1>
        <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
        </h1>
        
        <button>WHAT WE DO</button>
        </div>
     
     </motion.div>

     <motion.div className="listContainer">

     <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
        <h2>UI / UX Design:</h2>

        <p>Crafting intuitive and visually compelling user interfaces (UI) and seamless user experiences (UX) to enhance engagement and satisfaction. Our designs prioritize usability and aesthetics, ensuring your digital products stand out and resonate with your target audience!</p>
      <button>Go</button>
      </motion.div>

      <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
        <h2>Website Development</h2>
        <p>Crafting bespoke web solutions tailored to your needs, our web development services encompass everything from building intuitive websites to complex web applications. Using the latest tech, we turn your digital vision into reality.</p>
      <button>Go</button>
      </motion.div>

      <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
        <h2>Application Development</h2>
        <p>From concept to launch, we specialize in creating intuitive mobile applications for both Android and iOS platforms. Let us transform your ideas into impactful experiences. With a focus on quality and performance, we ensure your app stands out.!</p>
      <button>Go</button>
      </motion.div>

      <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
        <h2>QA Testing:</h2>
        <p>Ensuring the reliability and performance of your software through rigorous testing and quality assurance processes. From functional testing to automated regression testing, we guarantee the highest standards of quality to deliver bug-free and seamless user experiences!</p>
      <button>Go</button>
      </motion.div>
      
     </motion.div>
    </motion.div>
  );
};

export default Services;