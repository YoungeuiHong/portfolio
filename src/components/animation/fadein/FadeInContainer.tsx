"use client";
import styles from "./FadeInContainer.module.css";
import { ReactNode, useEffect, useRef, useState } from "react";

interface FadeInProps {
  id: string;
  children: ReactNode;
}

const FadeInContainer = ({ id, children }: FadeInProps) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    const currentRef = domRef.current;

    if (currentRef) {
      observer.observe(currentRef);
      return () => observer.unobserve(currentRef);
    }
  }, []);

  return (
    <div
      id={id}
      className={`${styles["fade-in-section"]} ${
        isVisible && styles["is-visible"]
      }`}
      ref={domRef}
      style={{
        scrollMarginBlockStart: 50,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInContainer;
