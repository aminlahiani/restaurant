import React from 'react'
import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowLeft as ArrowLeftIcon } from '../icons/arrow-left';
import { Mail as MailIcon } from '../icons/mail';
import { ContactForm } from '../components/contact/contact-form';
function Contact() {
    return (
        <Box
        component="main"
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            lg: 'repeat(2, 1fr)',
            xs: 'repeat(1, 1fr)'
          },
          flexGrow: 1
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.default',
            py: 8
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              pl: {
                lg: 15
              }
            }}
          >
            
            <Typography
              variant="h3"
              sx={{ mt: 3 }}
            >
              Reservation
            </Typography>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                mb: 6,
                mt: 8
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  mr: 2
                }}
                variant="rounded"
              >
                <MailIcon fontSize="small" />
              </Avatar>
              <Typography variant="overline">
                Reservation Form
              </Typography>
            </Box>
            <Typography variant="h1">
            Reserve Your Place
            </Typography>
            <Typography
              sx={{ py: 3 }}
              variant="body1"
            >
              Hac tellus, felis risus at mattis. Eget euismod semper eget tortor, donec amet, blandit. 
              Tristique facilisi faucibus elementum feugiat in nam in feugiat.
            </Typography>
            <Typography
              sx={{ color: 'primary.main' }}
              variant="h6"
            >
             reserve by phone : (256) 26 456 589
            </Typography>
           
          </Container>
        </Box>
        <Box
          sx={{
            backgroundColor: 'background.paper',
            px: 6,
            py: 15
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              pr: {
                lg: 15
              }
            }}
          >
            <Typography
              sx={{ pb: 3 }}
              variant="h6"
            >
              Fill the form below
            </Typography>
            <ContactForm />
          </Container>
        </Box>
      </Box>
    )
}

export default Contact
