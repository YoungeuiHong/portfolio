import { Stack, Chip, ChipPropsSizeOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles/createTheme";

interface ChipListProps {
  chips: string[];
  size?: OverridableStringUnion<"small" | "medium", ChipPropsSizeOverrides>;
  stackSx?: SxProps<Theme>;
}

const colors = [
  "#FAA6AD",
  "#FFB7B2",
  "#FFDAC1",
  "#E2F0CB",
  "#B5EAD7",
  "#C7CEEA",
];

const count_color = colors.length;
export default function ChipList({ chips, size, stackSx }: ChipListProps) {
  return (
    <Stack direction={"row"} spacing={0.3} sx={{ ...stackSx }}>
      {chips.map((chip, index) => (
        <Chip
          key={index}
          label={chip}
          size={size ?? "small"}
          sx={{ backgroundColor: colors[index % count_color], borderRadius: 2 }}
        />
      ))}
    </Stack>
  );
}
