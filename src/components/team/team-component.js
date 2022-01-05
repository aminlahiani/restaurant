import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ExternalLink as ExternalLinkIcon } from '../../icons/external-link';

export const TeamComponent = (props) => {
  const theme = useTheme();

  return (
    <>
 
    <Box
      sx={{
        backgroundColor: 'background.paper',
        mt: 5
      }}
     >
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          spacing={3}
        >
          <Grid
            item
            md={6}
            sm={8}
            xs={12}
          >
            <Box
              sx={{

                position: 'relative',
               
                '& img': {
                  height: 'auto',
                  position: 'relative',
                
                  width: '100%'
                }
              }}
            >
              <img
                alt="For designers"
                src="https://avada.theme-fusion.com/restaurant/wp-content/uploads/sites/112/2019/12/info92x.jpg"
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography variant="h2">
            Dominic Scott
            </Typography>
            <Typography
              color="textSecondary"
              sx={{ my: 3 }}
              variant="h2"
            >
           Tristique tempus condimentum diam donec. Condimentum ullamcorper sit elementum hendrerit mi nulla in consequat, ut. Metus, nullam scelerisque netus viverra dui pretium pulvinar. Commodo morbi amet.

Amet arcu eget nibh vitae, lectus aliquam enim ultrices. Mi hendrerit tempor eu, tempus risus laoreet et. Tellus adipiscing mi commodo, risus tempor volutpat amet cum. Enim quam sed fermentum dui ut diam eros, nisl, orci.

            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                m: -1
              }}
            >
              <Button
                component="a"
                endIcon={<ExternalLinkIcon fontSize="small" />}
                href="https://www.figma.com/file/W9jfIqc2IkdZKh77yOjLm7/MKP-v5.0(preview)"
                size="large"
                sx={{ m: 1 }}
                target="_blank"
                variant="outlined"
              >
                Preview Figma
              </Button>
              <Button
                disabled
                endIcon={<ExternalLinkIcon fontSize="small" />}
                size="large"
                sx={{ m: 1 }}
                variant="outlined"
              >
                Preview Sketch
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  );
};
