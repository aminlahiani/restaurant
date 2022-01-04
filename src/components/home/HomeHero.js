import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const backgroundImage =
  "https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

export default function HomeHero() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("${backgroundImage})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -2,
          position: "absolute",
        }}
      >
        <Box sx={{ backgroundColor: "#000", opacity: 0.7 }}>
          <Container
            sx={{
              mb: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              color="text.white"
              sx={{ mt: 10 }}
              variant="h1"
              component="h1"
            >
              Fine Dining Experience
            </Typography>
            <Typography
              color="text.white"
              align="center"
              variant="h5"
              sx={{ mb: 4, mt: 5 }}
            >
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed
              porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in,
              elementum id enim.
            </Typography>

            <Button
              color="grey"
              variant="contained"
              size="large"
              component="a"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ minWidth: 200, mt: 5, mb: 10 }}
            >
              <Typography color="#000" variant="h1" component="h1">
                EXPLORE THE MENU
              </Typography>
            </Button>
          </Container>
        </Box>
      </Box>
    </>
  );
}
