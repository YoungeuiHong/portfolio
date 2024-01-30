import FloatingStack from "@/components/stack/FloatingStack";
import { TooltipLinkButtonInfo } from "@/types/Button";
import MenuButton from "@/sections/project-detail/view/MenuButton";

interface FloatingMenuProps {
  links: TooltipLinkButtonInfo[];
}

export default function FloatingMenu({ links }: FloatingMenuProps) {
  return (
    <FloatingStack top={"120px"} right={"10vw"} spacing={1}>
      {links &&
        links.map((link, index) => {
          if (!link.internal) {
            return <MenuButton key={`menu-button-${index}`} link={link} />;
          }
        })}
    </FloatingStack>
  );
}
