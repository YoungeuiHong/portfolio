import { IconButton, Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface TooltipIconButtonProps {
  icon: ReactNode;
  tooltip: string;
  onClick: () => void;
  iconSize?: number;
  tooltipPlacement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
}

export default function TooltipIconButton({
  icon,
  tooltip,
  onClick,
  iconSize = 30,
  tooltipPlacement = "bottom",
}: TooltipIconButtonProps) {
  return (
    <Tooltip title={tooltip} placement={tooltipPlacement}>
      <IconButton
        onClick={onClick}
        sx={{
          "& svg": {
            fontSize: iconSize,
          },
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}
