import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 2,
        py: 5,
        textAlign: "center",
        position: "relative",
      }}
    >
      <Typography variant="body2">© 2024 about-youngeui.site</Typography>
    </Box>
  );
}
