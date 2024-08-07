import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import './Portfolio.scss';
import { useRef } from "react";

const items =[
    {
        id:1,
        title: "Fitness Fusion Kit",
        img: "k1.jpeg",
        desc: "A Fitness Fusion Kit is a comprehensive package designed to help individuals achieve their fitness goals by combining various workout styles. This includes sports shoes, yoga mat, jump rope and athletic wear. "

    },

    {
        id:2,
        title: "Mindful Musing Kit",
        img: "k2.jpeg",
        desc: "This curated collection of thoughtfully selected items is designed to create a serene sanctuary for your mind and soul. It includes candles, sleep mask, stress ball and inspirational books "

    },

    {
        id:3,
        title: "Nourish and Flourish Kit",
        img: "h3.jpeg",
        desc: "It typically includes items that cater to both physical and mental health, aiming to help individuals nourish their bodies and flourish in their lives. it includes dry fruits, healthy drinks, a  hydration tracker and nutrition booklet."
    },

    
];

const Single =({item})=>{

    const ref =useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset:["start start", "end start"]
    });

    const y = useTransform(scrollYProgress,[0,1],[-100,100]);
    // const y = useTransform(scrollYProgress,[0,1],[-300,300]);

    return(
        <section>
         <div className="container">
            <div className="wrapper">

                <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>

            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>Buy Now</button>
            </motion.div>
            </div>
         </div>
        </section>
    )
};

const Portfolio = () => {
    const ref =useRef();
    const {scrollYProgress} = useScroll({target:ref,offset:["end end", "start start"],
});

const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping:30,
});

  return (
    <div className="portfolio">
        <div className="progress">
            <h1>Our Kits</h1>
            
            <motion.div style={{scaleX}} className="progressBar">
          

            </motion.div>
        </div>
     {items.map((item) =>(

        <Single item = {item} key={item.id} />
     )
     )}
     
    </div>
  );
};

export default Portfolio;
