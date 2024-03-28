import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
    {
        id: 1,
        title: "Portfolio 1",
        img: "https://images.pexels.com/photos/4485749/pexels-photo-4485749.png?auto=compress&cs=tinysrgb&w=800",
        description: "This is a portfolio item description that is very long and will be cut off after a certain number of characters. This is a portfolio item description that is very long and will be cut off after a certain number of characters.",
    },
    {
        id: 2,
        title: "Portfolio 2",
        img: "https://images.pexels.com/photos/1652555/pexels-photo-1652555.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "This is a portfolio item description that is very long and will be cut off after a certain number of characters. This is a portfolio item description that is very long and will be cut off after a certain number of characters.",
    }, {
        id: 3,
        title: "Portfolio 3",
        img: "https://images.pexels.com/photos/4485749/pexels-photo-4485749.png?auto=compress&cs=tinysrgb&w=800",
        description: "This is a portfolio item description that is very long and will be cut off after a certain number of characters. This is a portfolio item description that is very long and will be cut off after a certain number of characters.",
    }, {
        id: 4,
        title: "Portfolio 4",
        img: "https://images.pexels.com/photos/4485749/pexels-photo-4485749.png?auto=compress&cs=tinysrgb&w=800",
        description: "This is a portfolio item description that is very long and will be cut off after a certain number of characters. This is a portfolio item description that is very long and will be cut off after a certain number of characters.",
    }
]

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, 
        // offset: ["start start", "end start"] 
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="Project Image" />
                </div>
                <motion.div className="textContainer" style={{ y }} >
                    <h2 >{item.title}</h2>
                    <p>{item.description}</p>
                    <button>See Demo</button>
                </motion.div>
            </div>
        </div>
    </section>
}


const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{ scaleX }}>

                </motion.div>
            </div>
            {items.map((item) => (

                <Single item={item} key={item.id} />

            ))}
        </div>
    );
}
export default Portfolio;