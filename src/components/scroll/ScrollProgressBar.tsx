import styles from "./ScrollProgressBar.module.css";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles["progress-bar"]}
      style={{ scaleX: scrollYProgress }}
    />
  );
}
