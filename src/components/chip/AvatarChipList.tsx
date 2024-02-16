import { Stack } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles/createTheme";
import { NameValue } from "@/types/NameValue";
import AvatarChip from "@/components/chip/AvatarChip";

interface ChipListProps {
  chips: NameValue[];
  stackSx?: SxProps<Theme>;
}

export default function AvatarChipList({ chips, stackSx }: ChipListProps) {
  return (
    <Stack
      direction={"row"}
      sx={{ mt: 2, ...stackSx }}
      spacing={0.5}
      useFlexGap
      flexWrap="wrap"
    >
      {chips.length &&
        chips.map((tech) => (
          <AvatarChip
            key={`tech-stack-chip-${tech.name}`}
            src={tech.value}
            alt={tech.name}
            text={tech.name}
          />
        ))}
    </Stack>
  );
}
