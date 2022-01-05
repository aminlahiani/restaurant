import { Avatar, Box, Button, Container, Typography } from "@mui/material";
const backgroundImage =
  "https://www.enbtsl.com/media/resturant/hero182x.jpg";

export const HomeTestimonials = (props) => (
  <>
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: 15,
      }}
      {...props}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mt: 3,
          }}
        >
          <div>
            <Typography color="primary.contrastText" variant="h4">
              PERFECT PLACE FOR A RECEPTION
            </Typography>
          </div>
        </Box>
        <Typography
          align="center"
          color="primary.contrastText"
          variant="h3"
          sx={{ mt: 3 }}
        >
          &quot;Nulla quis lorem ut libero malesuada feugiat. Pellentesque in
          ipsum id orci porta dapibus. Praesent sapien massa, convallis a
          pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam
          vehicula elementum sed sit amet dui.&quot;
        </Typography>
        <Button
          component="a"
          href="https://material-ui.com/store/items/devias-kit-pro"
          size="medium"
          sx={{ ml: 2, mt: 5 }}
          target="_blank"
          variant="contained"
          color="grey"
        >
          <Typography align="center" color="primary.contrastText">
            Plan your reception
          </Typography>
        </Button>
      </Container>
    </Box>
    <Box
      sx={{
       // backgroundImage: `url("${backgroundImage})`,
       backgroundImage:"url(https://www.enbtsl.com/media/resturant/hero182x.jpg)",
     
        backgroundSize: "cover",
   
       
     
      }}
    >
      <Typography
        color="text.white"
        sx={{ pt: 50 }}
        variant="h3"
        component="h3"
        align="center"
      >
        CHAMPAGNE DRINK – $16
      </Typography>
    </Box>
  </>
);
