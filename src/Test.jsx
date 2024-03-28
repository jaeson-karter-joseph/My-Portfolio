import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Test = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        visible: (i) => ({ opacity: 1, x: 100, transition: { type: "spring", stiffness: 200, damping: 200, staggerChildren: 0.2, delay: i * 0.3 } }),
        hidden: { opacity: 0 }
    }

    const items = ["item1", "item2", "item3", "item4", "item5"]
    return (
        <div className="course">
            {/* <motion.div className="box" variants={variants} transition={{ duration: 2 }} animate={open ? "visible" : "hidden"}></motion.div> */}
            <motion.ul variants={variants} initial="hidden" animate="visible">
                {items.map((item, i) => (
                    <motion.li key={item} variants={variants} custom={i}>
                        {item}

                    </motion.li>
                ))}

            </motion.ul>
            {/* <button onClick={() => setOpen(prev => !prev)}>Click</button> */}
        </div >
    );
}

export default Test;