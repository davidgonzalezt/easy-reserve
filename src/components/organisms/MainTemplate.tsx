import React from "react";
import { Container, Box, Typography as MuiTypography } from "@mui/material";
import Image from "next/image";
interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Box my={4} sx={{}}>
        <MuiTypography variant="h4" component="h1" gutterBottom sx={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/easy-reserve-logo.png"
            alt="Descripción de la imagen"
            width={100}
            height={100}
          />
          Easy Reserve
        </MuiTypography>

        {children}
      </Box>
    </Container>
  );
};

export default MainTemplate;
