import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimableProps = {
    children: React.ReactNode;
    index?: number;
    className?: string;
};

const Animable: React.FC<AnimableProps> = ({ children, index = 0, className = '' }) => {
    const { ref, inView } = useInView({ threshold: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 150 }}
            animate={
                inView
                    ? { opacity: 1, y: 0, transition: { type: 'tween', bounce: 0.7, duration: 0.5, delay: index * 0.1 } }
                    : { opacity: 0, y: 50 }
            }
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Animable;
