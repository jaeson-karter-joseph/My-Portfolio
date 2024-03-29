import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
    {
        id: 1,
        title: "Food Ordering App - MERN Stack",
        img: "https://live.staticflickr.com/65535/51735645335_44e88ef23a_b.jpg",
        description: "Responsive food ordering application leveraging the MERN stack with TypeScript for enhanced scalability and maintainability. Integrated Tailwind CSS for streamlined UI development and Schadcn technology for improved performance. Deployed the application on Render.com, ensuring optimal user experience and accessibility.",
        demoLink: "https://mern-food-ordering-app-frontend-k3qv.onrender.com/",
        codeLink: "https://github.com/jaeson-karter-joseph/mern-food-ordering-app-frontend"
    },
    {
        id: 2,
        title: "Warehouse Inventory App - Angular",
        img: "https://www.current-rms.com/assets/laptop-quarantine-recent-actions-a42441cff387fbeadf129025a94745e0.jpg",
        description: "Angular-based warehouse inventory application with a user-friendly interface and seamless navigation. Utilized NG Prime for enhanced UI design and integrated Firebase for real-time data synchronization.",
        demoLink: "",
        codeLink: "https://github.com/jaeson-karter-joseph/Jetz-Inventory-Client-Side"

    }, {
        id: 3,
        title: "GraphQL POC - ASP.NET Core",
        img: "https://www.seobility.net/en/wiki/images/f/f1/Rest-API.png",
        description: "Proof of concept for GraphQL API development using ASP.NET Core, enhancing data querying efficiency and performance. Implemented Redis cache solutions for optimized data caching, further enhancing application performance and efficiency.",
        demoLink: "",
        codeLink: "https://github.com/jaeson-karter-joseph/GraphQL_POC"
    }, {
        id: 4,
        title: "E-Commerce REST API - Nodejs, MongoDB",
        img: "https://storage.needpix.com/rsynced_images/ecommerce-3529837_1280.jpg",
        description: "Developed a RESTful API for an e-commerce platform using Node.js and MongoDB, ensuring seamless data retrieval and storage. Integrated Postman for API documentation and testing, enhancing the application’s usability and performance. Deployed on render.com for optimal user experience and accessibility.",
        demoLink: "https://ecommerce-rest-api-15z9.onrender.com",
        codeLink: "https://github.com/jaeson-karter-joseph/E-Commerce-REST-API"
    },
    {
        id: 5,
        title: "Currency Converter - React",
        img: "https://cdn.iconscout.com/icon-pack/preview-mockup/free-currency-vol-2-1-3001.png",
        description: "React-based currency converter application with a user-friendly interface and seamless navigation. Utilized Tailwind CSS for enhanced UI design and integrated ExchangeRate-API for real-time currency conversion.",
        demoLink: "",
        codeLink: "https://github.com/jaeson-karter-joseph/Currency-Convertor"
    },
    {
        id: 6,
        title: "Dance Studio App - MEAN",
        img: "https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f33e97ab-4adf-4118-8c89-4d405193f1e3/652744e2-0c87-4003-9a86-942d9b52b4d5.png",
        description: "MEAN stack-based dance studio application with a user-friendly interface and seamless navigation. Utilized Angular Material for enhanced UI design and integrated MongoDB for real-time data synchronization.",
        demoLink: "",
        codeLink: "https://github.com/jaeson-karter-joseph/dance-studio-manager"
    }
]

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"] 
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return <section id={item.id}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="Project Image" />
                </div>
                <motion.div className="textContainer" style={{ y }} >
                    <h2 >{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="demo-button">
                        {item.demoLink && <button><a href={item.demoLink} target="_blank" rel="noopener noreferrer">See Demo</a> </button>}
                        <button><a href={item.codeLink} target="_blank" rel="noopener noreferrer">See Code on GitHub</a> </button>
                    </div>
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