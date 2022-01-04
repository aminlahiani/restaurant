import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      light: "#DBE5FB",
      main: "#435ebe",
      dark: "#213388",
      200: "#B8CAF8",
      800: "#15226E",
  },
    error: {
      main: red.A400,
    },
    dark: {
      light: "#bdc8f0",
      main: "#29314f",
      dark: "#212946",
      800: "#1a223f",
      900: "#111936",
  },
    grey: {
      light: "#9e9e9e",
      main: "#616161",
      dark: "#212121",
      50: "#fafafa",
      100: "#f5f5f5",
      500: "#9e9e9e",
      600: "#616161",
      700: "#616161",
      900: "#212121",
  },
     text: {
    primary: "#212121",
    secondary: "#8492c4",
    dark: "#9e9e9e",
    hint: "#f5f5f5",
    white : "#ffffff"
},
  },
  typography: {
    fontFamily: "Poppins, sans-serif",

    h6: {
        fontWeight: 500,
        color: "#212121",
        fontSize: "0.75rem",
    },
    h5: {
        fontSize: "0.875rem",
        color:"#212121",
        fontWeight: 500,
    },
    h4: {
        fontSize: "1rem",
        color: "#212121",
        fontWeight: 600,
    },
    h3: {
        fontSize: "1.25rem",
        color: "#212121",
        fontWeight: 600,
    },
    h2: {
        fontSize: "1.5rem",
        color:"#212121",
        fontWeight: 700,
    },
    h1: {
        fontSize: "2.125rem",
        color: "#212121",
        fontWeight: 700,
    },
    subtitle1: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color:"#212121",
    },
    subtitle2: {
        fontSize: "0.75rem",
        fontWeight: 400,
        color:  "#9e9e9e",
    },
    caption: {
        fontSize: "0.75rem",
        color: "#9e9e9e" ,
        fontWeight: 400,
    },
    body1: {
        fontSize: "0.875rem",
        color: "#616161",
        fontWeight: 400,
        lineHeight: "1.334em",
    },
    body2: {
        letterSpacing: "0em",
        fontWeight: 400,
        lineHeight: "1.5em",
        color:  "#616161",
    },
    button: {
        textTransform: "capitalize",
    },
    customInput: {
        marginTop: 1,
        marginBottom: 1,
        // '& > label': {
        //     top: 23,
        //     left: 0,
        //     color: palette.grey[500],
        //     '&[data-shrink="false"]': {
        //         top: 5
        //     }
        // },
        // '& > div > input': {
        //     padding: '30.5px 14px 11.5px !important',

        // },
        // '& legend': {
        //     display: 'none'
        // },
        "& fieldset": {
            top: 0,
        },
    },
    mainContent: {
        backgroundColor: "#DBE5FB",
        width: "100%",
        minHeight: "calc(100vh - 88px)",
        //minHeight: '100vh',
        flexGrow: 1,
        padding: "20px",
        marginTop: "88px",
        marginRight: "20px",
        borderRadius: `${15}px`,
    },
    mainContentChild: {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    menuCaption: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color:"#212121",
        padding: "6px",
        textTransform: "capitalize",
        marginTop: "10px",
    },
    subMenuCaption: {
        fontSize: "0.6875rem",
        fontWeight: 500,
        color:"#212121",
        textTransform: "capitalize",
    },
    commonAvatar: {
        cursor: "pointer",
        borderRadius: "8px",
    },
    smallAvatar: {
        width: "22px",
        height: "22px",
        fontSize: "1rem",
    },
    mediumAvatar: {
        width: "34px",
        height: "34px",
        fontSize: "1.2rem",
    },
    largeAvatar: {
        width: "44px",
        height: "44px",
        fontSize: "1.5rem",
    },
},
});

export default theme;