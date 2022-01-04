import { format, subHours, subMinutes, subSeconds } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Chip,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const now = new Date();

const horsdoevers = [
  {
    id: "1",
    title: "AHI SALMON NIGIRI",
    price: "$48",
    shortDescription:
      "Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit lacinia .",
  },
  {
    id: "2",
    title: "UMI MASU SALAD",
    price: "$21",
    shortDescription:
      "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque .",
  },
  {
    id: "3",
    title: "TEMAKI WITH CRAB",
    price: "$32",
    shortDescription:
      "Ac vel, risus ornare senectus placerat duis amet dictumst tellus",
  },
];

const maincourse = [
  {
    id: "1",
    title: "Braised Abalone",
    price: "$52",
    shortDescription:
      "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.",
  },
  {
    id: "2",
    title: "Twice Cooked Pork",
    price: "$21",
    shortDescription:
  
      "Ac vel, risus ornare senectus placerat duis amet dictumst tellus."
  },
  {
    id: "3",
    title: "Kung Pao Chicken",
    price: "$32",
    shortDescription:
     "Quis duis sit dictum aliquam a velit enim. Tellus in sit augue aliquam"
  },
];

const desserts = [
  
    {
      id: "1",
      title: "Chocolate ball cake",
      price: "$13",
      shortDescription:
        "In pellentesque in felis massa vehicula. In sed euismod ut",
    },
    {
      id: "2",
      title: "LIME PIE WITH CRUSTe",
      price: "$14",
      shortDescription:
        "Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque",
    },
    {
      id: "2",
      title: "RASBERRY PEAR CAKE",
      price: "$18",
      shortDescription:
        "Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit.",
    },
  
];


const BlogPostCardMediaWrapper = styled("div")({
  paddingTop: "calc(100% * 4 / 4)",
  position: "relative",
});

export const GridList1 = () => (
  <>

    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        p: 3,
      }}
    >
  <Container maxWidth="lg">
      <Typography
        color="dark"
        sx={{ mt: 10, mb: 5 }}
        align="center"
        variant="h1"
        component="h1"
      >
        HORS D’OEUVRES
      </Typography>

      <Grid container spacing={3}>
        {horsdoevers.map((post) => (
          <Grid item key={post.id} md={4} xs={12}>
            <Card
              sx={{
                height: "100%",
                p: 2,
              }}
            >
              <Box sx={{ mt: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: 2,
                  }}
                >
                  <Link href="" underline="none" variant="h5">
                    {post.title}
                  </Link>

                  <Box sx={{ ml: 10 }}>
                    <Chip label={post.price} variant="outlined" />
                  </Box>
                </Box>

                <Typography
                  color="textSecondary"
                  sx={{
                    height: 72,
                    mt: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                  variant="body1"
                >
                  {post.shortDescription}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography
        color="dark"
        sx={{ mt: 10, mb: 5 }}
        align="center"
        variant="h1"
        component="h1"
      >
        Main Course
      </Typography>

      <Grid container spacing={3}>
        {maincourse.map((post) => (
          <Grid item key={post.id} md={4} xs={12}>
            <Card
              sx={{
                height: "100%",
                p: 2,
              }}
            >
              <Box sx={{ mt: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: 2,
                  }}
                >
                  <Link href="" underline="none" variant="h5">
                    {post.title}
                  </Link>

                  <Box sx={{ ml: 10 }}>
                    <Chip label={post.price} variant="outlined" />
                  </Box>
                </Box>

                <Typography
                  color="textSecondary"
                  sx={{
                    height: 72,
                    mt: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                  variant="body1"
                >
                  {post.shortDescription}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography
        color="dark"
        sx={{ mt: 10, mb: 5 }}
        align="center"
        variant="h1"
        component="h1"
      >
        DESSERTS
      </Typography>

      <Grid container spacing={3}>
        {desserts.map((post) => (
          <Grid item key={post.id} md={4} xs={12}>
            <Card
              sx={{
                height: "100%",
                p: 2,
              }}
            >
              <Box sx={{ mt: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: 2,
                  }}
                >
                  <Link href="" underline="none" variant="h5">
                    {post.title}
                  </Link>

                  <Box sx={{ ml: 10 }}>
                    <Chip label={post.price} variant="outlined" />
                  </Box>
                </Box>

                <Typography
                  color="textSecondary"
                  sx={{
                    height: 72,
                    mt: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                  variant="body1"
                >
                  {post.shortDescription}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  </>
);
