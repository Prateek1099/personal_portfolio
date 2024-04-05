import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import './Portfolio.scss';
import { useRef } from "react";

const items =[
    {
        id:1,
        title: "Matrimonial Website",
        img: "https://images.pexels.com/photos/33582/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "The Matrimonial Site Project aims to create an online platform that facilitates the process of finding a life partner. This platform will serve as a digital matchmaking service where individuals can create profiles, search for compatible matches, and interact with potential partners to establish meaningful connections leading to marriage.. "

    },

    {
        id:2,
        title: "Nextjs Blog",
        img: "https://images.pexels.com/photos/668353/pexels-photo-668353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Welcome to the Omniverse Chronicles, your one-stop destination for a diverse range of topics covering everything under the sun! Dive into a vast array of captivating subjects, from science and technology to arts, culture, lifestyle, and beyond. Our blog aims to be a treasure trove of information, offering insightful articles, thought-provoking discussions, and engaging content that caters to curious minds of all ages and interests.. "

    },

    {
        id:3,
        title: "Just Search",
        img: "https://images.pexels.com/photos/321576/pexels-photo-321576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Welcome to JustSearch, your go-to destination for all your local search needs! Just like JustDial, ConnectHub is your trusted companion in navigating the bustling world around you. Whether you're searching for the nearest restaurants, hotels, hospitals, or any other service providers, ConnectHub is here to simplify your quest."
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
                <button>Visit Website</button>
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
            <h1>Featured Works</h1>
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
