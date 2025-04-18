import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollFadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
