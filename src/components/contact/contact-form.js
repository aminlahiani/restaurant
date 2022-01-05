import { useState } from 'react';
import { Box, Button, Grid, Link, MenuItem, Select, TextField, Typography } from '@mui/material';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
export const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
           Your name *
          </Typography>
          <TextField
            fullWidth
            name="name"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
           Phone number *
          </Typography>
          <TextField
            fullWidth
            name="company"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
           Email  *
          </Typography>
          <TextField
            fullWidth
            name="email"
            type="email"
            required
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
           Number of guests  *
          </Typography>
          <TextField
            fullWidth
            name="number"
            required
            type="number"
          />
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid
          item
          xs={12}
          sm={6}
        >
       <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
         Date of reservation  *
          </Typography>
              <MobileDatePicker
               
                onChange={(newDate) => setStartDate(newDate)}
                renderInput={(inputProps) => (
                  <TextField {...inputProps} />
                )}
                value={startDate}
              />
          
        </Grid>
      
       
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Time of reservation *
          </Typography>
          <MobileTimePicker
               
                onChange={(newDate) => setStartDate(newDate)}
                renderInput={(inputProps) => (
                  <TextField {...inputProps} />
                )}
                value={startDate}
              />
        </Grid>
        </LocalizationProvider>
       
        <Grid
          item
          xs={12}
        >
          <Typography
            sx={{ mb: 1 }}
            variant="subtitle2"
          >
            Additional note
          </Typography>
          <TextField
            fullWidth
            name="message"
            required
            multiline
            rows={3}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3
        }}
      >
        <Button
          fullWidth
          size="large"
          variant="contained"
        >
          Let&apos;s Talk
        </Button>
      </Box>
      <Typography
        color="textSecondary"
        sx={{ mt: 3 }}
        variant="body2"
      >
        By submitting this, you agree to the
        {' '}
        <Link
          color="textPrimary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Privacy Policy
        </Link>
        {' '}
        and
        {' '}
        <Link
          color="textPrimary"
          href="#"
          underline="always"
          variant="subtitle2"
        >
          Cookie Policy
        </Link>
        .
      </Typography>
    </form>
  );
};
