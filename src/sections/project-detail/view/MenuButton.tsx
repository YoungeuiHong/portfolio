import TooltipIconButton from "@/components/button/TooltipIconButton";
import { TooltipLinkButtonInfo } from "@/types/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

interface MenuButtonProps {
  link: TooltipLinkButtonInfo;
}
export default function MenuButton({ link }: MenuButtonProps) {
  const { icon, tooltip, href } = link;
  return (
    <TooltipIconButton
      icon={icon === "github" ? <GitHubIcon /> : icon}
      tooltip={tooltip}
      tooltipPlacement={"right"}
      onClick={() => window.open(href)}
      iconSize={30}
      buttonSx={{
        backgroundColor: (theme) => theme.palette.common.white,
        borderStyle: "solid 1px",
        borderColor: (theme) => theme.palette.grey[300],
      }}
    />
  );
}
