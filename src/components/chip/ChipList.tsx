import { Stack, Chip } from "@mui/material";

interface ChipListProps {
  chips: string[];
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
export default function ChipList({ chips }: ChipListProps) {
  return (
    <Stack direction={"row"} spacing={0.3} sx={{ margin: 0.5 }}>
      {chips.map((chip, index) => (
        <Chip
          key={index}
          label={chip}
          sx={{ backgroundColor: colors[index % count_color] }}
        />
      ))}
    </Stack>
  );
}
