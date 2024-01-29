import Image from "next/image";
import styles from "./WobbleImage.module.css";

interface WobbleImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function WobbleImage({
  src,
  alt = "image",
  width = 300,
  height = 300,
  priority = false,
}: WobbleImageProps) {
  const divStyle = { width: width, height: height };

  return (
    <div className={styles.container} style={divStyle}>
      <div className={styles.shape} style={divStyle}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
        />
      </div>
    </div>
  );
}
