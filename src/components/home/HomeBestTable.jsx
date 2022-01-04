import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ExternalLink as ExternalLinkIcon } from '../../icons/external-link';

export const HomeBestTable = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        py: 5,
        mb :10
      }}
      {...props}>
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
                pt: 'calc(960 / 1225 * 100%)',
                '& img': {
                  height: 'auto',
                  position: 'absolute',
                  top: 0,
                  width: '100%'
                }
              }}
            >
              <img
                alt="For designers"
                src="https://enbtsl.com/media/resturant/slider52x.webp"
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography variant="h1">
            Best Table In Town
            </Typography>
            <Typography
              color="textSecondary"
              sx={{ my: 5 }}
              variant="subtitle1"
            >
             Pellentesque vitae viverra risus, sagittis. 
             Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.
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
                Explore the menu
              </Button>
             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
