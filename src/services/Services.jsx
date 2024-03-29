import "./Services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {

    const handleDownloadResume = () => {
        // Replace 'YOUR_PDF_URL_HERE' with the actual URL of your PDF file
        const pdfUrl = 'https://drive.usercontent.google.com/u/0/uc?id=1ozibx9D64kvHR9QwjuWDgyPZqdAla7Ju&export=download';

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank';
        link.download = 'resume.pdf';

        // Trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>Driving innovation through<br /> Full-Stack expertise</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="people" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Crafting</motion.b> Digital</h1>
                </div>
                <div className="title">

                    <h1><motion.b whileHover={{ color: "orange" }}>World With </motion.b>Code.</h1>
                    <button><a href="#Portfolio">WHAT I DID?</a></button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Experience </h2>
                    <h2>Jan 2022 -  Present</h2>
                    <span>Bajaj Finserv | Full Stack Developer</span>
                    <ul>
                        <li>
                            Led the collaborative full-stack development of cloud-based SaaS applications utilizing Angular, SQL & .NET technologies,
                            emphasizing quality, usability, and performance on fintech products.
                        </li>
                        <li>
                            Led the development and design of a high-performance front-end architecture, resulting in an improvement of user
                            satisfaction and system performance.
                        </li>
                        <li>Engineered REDIS cache solutions
                            for optimized data caching, further enhancing application performance and efficiency.</li>
                    </ul>
                    <button onClick={handleDownloadResume}>Download CV</button>

                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Awards And Achievements</h2>
                    <ul>
                        <li>
                            Certificate of Appreciation
                        </li>
                        <li>
                            Super Achiever
                        </li>
                        <li> Hero&apos;s Award</li>
                    </ul>
                    <button> <a rel="noopener noreferrer" href="https://www.linkedin.com/in/jaesonjoseph/overlay/experience/2052392852/multiple-media-viewer/?profileId=ACoAACtB_aoBEgsYccxLvKWwK1hr9kpYEIvNtXg&treasuryMediaId=1635555479711" target="_blank">See Achievements</a></button>


                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Certifications</h2>
                    <ul>
                        <li>
                            Amazon Web Services Cloud Practitioner
                        </li>
                        <li>
                            DevOps, Cloud, Agile
                        </li>
                        <li>Python For Data Science, AI & Development</li>
                        <li>JavaScript Data Structures & Algorithms</li>
                        <li>UI Design</li>
                        <li>Linux Commands and Shell Scripting</li>
                    </ul>
                    <button> <a href="https://www.linkedin.com/in/jaesonjoseph/details/certifications/" target="_blank" rel="noopener noreferrer">See All Certificates</a> </button>


                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Skills</h2>
                    <ul>
                        <li>
                            <b>Front-End:</b> Angular, React, TypeScript, HTML, Tailwind
                        </li>
                        <li>
                            <b> Back-End:</b> .NET Core, C#, ASP.NET, Web API, SQL Server,
                            Redis, NodeJs
                        </li>
                        <li><b>Frameworks:</b> Bootstrap, Prime Flex, Ng Prime, SCSS</li>
                        <li><b>AI Tools:</b> CHAT-GPT, Gemini</li>
                        <li><b>Database:</b> SQL, NoSQL, MongoDB</li>
                        <li><b>Cloud:</b> Azure, AWS</li>
                        <li><b>Tools and Technologies:</b> Git, CI/CD pipelines,
                            Microservices, Docker</li>
                        <li><b> Interpersonal Skills:</b> Fluent Communication, Adaptability</li>
                    </ul>
                    <button> <a href="https://www.linkedin.com/in/jaesonjoseph/details/skills/" target="_blank" rel="noopener noreferrer">See All Skills</a> </button>
           
                </motion.div>
            </motion.div>
        </motion.div >
    );
}

export default Services;