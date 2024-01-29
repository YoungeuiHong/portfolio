import { Icon, IconButton, Theme, Tooltip } from "@mui/material";
import { ReactNode } from "react";
import { SxProps } from "@mui/system";

interface TooltipIconButtonProps {
  icon: ReactNode | string;
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
  buttonSx?: SxProps<Theme>;
}

export default function TooltipIconButton({
  icon,
  tooltip,
  onClick,
  iconSize = 30,
  tooltipPlacement = "bottom",
  buttonSx,
}: TooltipIconButtonProps) {
  return (
    <Tooltip title={tooltip} placement={tooltipPlacement}>
      <IconButton
        onClick={onClick}
        sx={{
          "& svg": {
            fontSize: iconSize,
          },
          ...buttonSx,
        }}
      >
        {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
      </IconButton>
    </Tooltip>
  );
}
