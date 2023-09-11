// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976D2', // Customize primary color
        },
        secondary: {
            main: '#FF5722', // Customize secondary color
        },
    },
    typography: {
        fontFamily: 'Roboto', // Customize font
    },
});

export default theme;
