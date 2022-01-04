import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { ArrowRight as ArrowRightIcon } from "../../icons/arrow-right";
import { Briefcase as BriefcaseIcon } from "../../icons/briefcase";
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from "../../icons/information-circle-outlined";


function HomeSection() {
  return (
      
    <Container sx={{ mb: 5 , mt : 5}}>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <BriefcaseIcon color="primary" fontSize="small" />
                <Typography
                  color="primary.main"
                  sx={{ pl: 1 }}
                  variant="subtitle2"
                >
                  EXPERIENCE
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
              FINE DINING EXPERIENCE
              </Typography>
              <Typography color="textSecondary" variant="body2">
              Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.
               Praesent sapien massa, convallis a pellentesque nec, 
              </Typography>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                endIcon={<ArrowRightIcon fontSize="small" />}
                size="small"
              >
                EXPLORE THE MENU
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <InformationCircleOutlinedIcon color="primary"    fontSize="small" />
                <Typography
                  color="primary.main"
                  sx={{ pl: 1 }}
                  variant="subtitle2"
                >
                  MIXOLOGISTS
                </Typography>
              </Box>
              <Typography sx={{ mt: 2 }} variant="h6">
              PROFESIONNAL MIXOLOGISTS
              </Typography>
              <Typography color="textSecondary" variant="body2">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. 
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              </Typography>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                endIcon={<ArrowRightIcon fontSize="small" />}
                size="small"
              >
               About our cocktails
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
       
      </Grid>
    </Container>
  );
}

export default HomeSection;
