import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Why You Need Me?
                </motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/jaesonjoseph/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedIn.png" alt="" />
                    </a>
                    <a href="https://github.com/jaeson-karter-joseph?tab=repositories" target="_blank" rel="noopener noreferrer" >
                        <img src="/github.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/jc_capital_chase" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="" />
                    </a>
                    <a href="https://www.youtube.com/@JCCaptialChase" target="_blank" rel="noopener noreferrer">
                        <img src="/youtube.png" alt="" target="_blank" rel="noopener noreferrer" />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;