import { grey } from "@mui/material/colors";
import { Stack, Typography } from "@mui/material";
import { Description } from "@/types/Description";

interface DescriptionCardProps {
  descriptions: Description[];
}

export default function DescriptionCard({
  descriptions,
}: DescriptionCardProps) {
  const renderDescription = (des: Description, index: number) => {
    if (des.type === "string") {
      return (
        <Typography key={index} variant={"subtitle1"}>
          <b>{des.title}</b> : {des.content}
        </Typography>
      );
    } else if (des.type === "ReactNode") {
      return (
        <>
          <Typography variant={"subtitle1"}>
            <b>{des.title}</b>
          </Typography>
          {des.content}
        </>
      );
    }
  };
  return (
    <Stack
      direction={"column"}
      sx={{
        backgroundColor: grey[100],
        width: 430,
        borderRadius: 1,
        p: 1,
        mt: 1,
      }}
    >
      {descriptions.length &&
        descriptions.map((des, index) => (
          <div key={`description-card-${des.title}-${index}`}>
            {renderDescription(des, index)}
          </div>
        ))}
    </Stack>
  );
}
