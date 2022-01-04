import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";



const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80";

export default function ProductHero() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("${backgroundImage})`,
          backgroundColor: "#7fc7e9", // Average color of the background image.
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -2,
          position: "absolute",
        }}
      >
        <Container
          sx={{
            mb: 14,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ mt: 20 }}
            color="secondary"
            align="center"
            variant="h2"
            marked="center"
          >
            Upgrade your Sundays
          </Typography>
          <Typography
            color="secondary"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
          >
            Enjoy secret offers up to -70% off the best luxury hotels every
            Sunday.
          </Typography>
          <Typography
            color="secondary"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
          >
            Enjoy secret offers up to -70% off the best luxury hotels every
            Sunday.
          </Typography>

          <Button
            color="secondary"
            variant="contained"
            size="large"
            component="a"
            href="/premium-themes/onepirate/sign-up/"
            sx={{ minWidth: 200 }}
          >
            Register
          </Button>
          <Typography variant="body2" color="secondary" sx={{ mt: 2 }}>
            Discover the experience
          </Typography>
        </Container>
      </Box>
    </>
  );
}
