import SectionLayout from "@/sections/layout";
import { Grid } from "@mui/material";
import { CERTIFICATES } from "@/data/certificate";
import CertificateCard from "@/sections/certificate/view/CertificateCard";

export default function Certificate() {
  return (
    <SectionLayout
      id={"certificate"}
      title={"자격증 및 수상"}
      stackSx={{ backgroundColor: "#FAFAFA" }}
    >
      <Grid container maxWidth={"lg"} spacing={3}>
        {CERTIFICATES.map((certificate) => (
          <Grid
            key={`certificate-${certificate.name}`}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <CertificateCard certification={certificate} />
          </Grid>
        ))}
      </Grid>
    </SectionLayout>
  );
}
