// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    spacing: 4,
    typography: {
        fontFamily: [
            'Roboto',
            'Raleway',
            'Open Sans',
        ].join(','),
        h1: {
            fontSize: '5rem',
            fontFamily: 'Raleway',
        },
        h2: {
            fontSize: '3.5rem',
            fontFamily: 'Open Sans',
            fontStyle: 'bold',
        },
        h3: {
            fontSize: '2.5rem',
            fontFamily: 'Roboto',
        },
    },
    palette: {
        background: {
            default: '#009900'//green
        },
        primary: {
            main: '#2B37D4',//indigo
        },
        secondary: {
            main: '#E769A6',//pink
        },
        error: {
            main: '#D72A2A',//red
        },
        warning: {
            main: '#FC7B09',//orange
        },
        info: {
            main: '#6B7D6A',//gray
        },
        success: {
            main: '#09FE00',//green
        },
        text: {
            primary: '#000000',//black
            secondary: '#FFFFFF',//white
        },
    },

});

const themeDark = createTheme({
    darkMode: {
        background: {
            default: '#121212', // Color de fondo oscuro
        },
        primary: {
            main: '#64B5F6', // Color principal en modo oscuro
        },
        secondary: {
            main: '#FFB74D', // Color secundario en modo oscuro
        },
        text: {
            primary: '#FFFFFF', // Color del texto en modo oscuro
            secondary: '#B0B0B0', // Color del texto secundario en modo oscuro
        },
    },
});

export { theme, themeDark };

