import { motion, useReducedMotion } from "framer-motion";

const AnimatedBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Círculo azul */}
      <motion.div
        className="absolute top-[-120px] left-[-120px] bg-blue-200 rounded-full"
        style={{ width: 400, height: 400, filter: "blur(80px)" }}
        animate={!shouldReduceMotion ? { x: [0, 60, 0], y: [0, 40, 0] } : {}}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      {/* Círculo violeta */}
      <motion.div
        className="absolute bottom-[-140px] right-[-140px] bg-purple-200 rounded-full"
        style={{ width: 350, height: 350, filter: "blur(80px)" }}
        animate={!shouldReduceMotion ? { x: [0, -40, 0], y: [0, -60, 0] } : {}}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      {/* Círculo celeste */}
      <motion.div
        className="absolute top-1/2 left-1/2 bg-blue-100 rounded-full"
        style={{ width: 300, height: 300, filter: "blur(60px)", transform: "translate(-50%, -50%)" }}
        animate={!shouldReduceMotion ? { scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] } : {}}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default AnimatedBackground;