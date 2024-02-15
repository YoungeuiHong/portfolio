import { Certification } from "@/data/certificate";
import { Stack, Typography } from "@mui/material";
import FillCoverImage from "@/components/image/FillCoverImage";

interface CertificateCardProps {
  certification: Certification;
}

export default function CertificateCard({
  certification,
}: CertificateCardProps) {
  const { name, date, thumbnail } = certification;

  return (
    <Stack
      direction={"row"}
      sx={{
        mt: 1,
        width: "100%",
        justifyContent: "space-between",
        height: 150,
        borderRadius: 3,
        backgroundColor: "#FFFFFF",
        boxShadow: "4px 0px 10px 0px rgba(0,0,0,.03)",
        overflow: "hidden",
      }}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        sx={{ height: "100%", mx: 3 }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: 20 }}>{name}</Typography>
        <Typography variant={"body2"}>{date}</Typography>
      </Stack>
      <FillCoverImage src={thumbnail} alt={name} sx={{ width: "35%", mr: 2 }} />
    </Stack>
  );
}
