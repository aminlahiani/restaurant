
import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';


export const TeamHero = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        pt: 6
      }}
      {...props}>
      <Container
        maxWidth="md"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography
          color="primary"
          variant="overline"
        >
          Introducing
        </Typography>
        <Typography
          align="center"
          variant="h1"
        >
          Material Kit Pro v5.0
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          variant="subtitle1"
          sx={{ py: 3 }}
        >
          A professional kit that comes with ready-to-use MUI© components developed with one
          common goal in mind, help you build faster &amp; beautiful applications.
        </Typography>
       
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            mx: -1,
            mt: 2,
            mb: 6,
            '& > a': {
              m: 1
            }
          }}
        >
          <Link
            to="/browse"
            
          >
            <Button
              component="a"
              size="large"
              variant="outlined"
            >
              Browse Components
            </Button>
          </Link>
          <Link
            to="/dashboard"
          
          >
            <Button
              component="a"
              size="large"
              variant="contained"
            >
              Live Demo
            </Button>
          </Link>
        </Box>
      </Container>
   
    </Box>
  );
};
