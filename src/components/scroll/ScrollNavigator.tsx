import { useEffect, useState } from "react";
import styles from "./ScrollNavigator.module.css";

export default function ScrollNavigator() {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id={styles["mvArea"]} className={scroll ? styles.resize : ""}>
      <div className={styles.scrollNavWrap}>
        <span className={styles.scrollNav}>Scroll</span>
      </div>
    </div>
  );
}
