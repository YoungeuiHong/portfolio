import { Tooltip } from "@mui/material";
import Image from "next/image";

interface ImageIconProps {
  src: string;
  tooltip: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function TooltipImageIcon({
  src,
  tooltip,
  alt = "icon",
  width = 50,
  height = 50,
}: ImageIconProps) {
  return (
    <Tooltip title={tooltip}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ margin: 0 }}
      />
    </Tooltip>
  );
}
