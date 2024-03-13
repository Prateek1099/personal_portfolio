import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import './Portfolio.scss';
import { useRef } from "react";

const items =[
    {
        id:1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/33582/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam non ex vulputate scelerisque. Nullam vel turpis in velit tempus aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed vestibulum pretium dolor, vitae ultricies mauris efficitur sed. "

    },

    {
        id:2,
        title: "Nextjs Blog",
        img: "https://images.pexels.com/photos/668353/pexels-photo-668353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam non ex vulputate scelerisque. Nullam vel turpis in velit tempus aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed vestibulum pretium dolor, vitae ultricies mauris efficitur sed. "

    },

    {
        id:3,
        title: "Vanilla Js App",
        img: "https://images.pexels.com/photos/321576/pexels-photo-321576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsvel turpis in velit tempus aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed vestibulum pretium dolor, vitae ultricies mauris efficitur sed. "

    },

    {
        id:4,
        title: "Music App",
        img: "https://images.pexels.com/photos/632125/pexels-photo-632125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam non ex vulputate scelerisque. Nullam vel turpis in velit tempus aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed vestibulum pretium dolor, vitae ultricies mauris efficitur sed. "

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
