// theme.js
import { createTheme } from '@mui/material/styles';

// Tema claro
const theme = createTheme({
    spacing: 4,
    typography: {
        fontFamily: [
            'Roboto',
            'Raleway',
            'Open Sans',
        ].join(','),
        h1: {
            fontSize: '2.5rem', // Ajusta el tamaño de la fuente para h1
            fontFamily: 'Raleway',
            fontWeight: 'bold', // Añade negrita
        },
        h2: {
            fontSize: '2rem', // Ajusta el tamaño de la fuente para h2
            fontFamily: 'Open Sans',
            fontWeight: 'bold', // Añade negrita
        },
        h3: {
            fontSize: '1.5rem', // Ajusta el tamaño de la fuente para h3
            fontFamily: 'Roboto',
            fontWeight: 'bold', // Añade negrita
        },
    },
    palette: {
        background: {
            default: '#FFFFFF', // Fondo blanco
        },
        primary: {
            main: '#1976D2', // Color principal azul
        },
        secondary: {
            main: '#FF5722', // Color secundario naranja
        },
        error: {
            main: '#D32F2F', // Color de error rojo
        },
        warning: {
            main: '#FFA000', // Color de advertencia naranja
        },
        info: {
            main: '#1976D2', // Color de información azul (coincide con el color principal)
        },
        success: {
            main: '#388E3C', // Color de éxito verde
        },
        text: {
            primary: '#000000', // Texto negro en lugar de negro puro
            secondary: '#757575', // Texto secundario gris oscuro
        },
    },
});

// Tema oscuro
const themeDark = createTheme({
    spacing: 4,
    typography: {
        fontFamily: [
            'Roboto',
            'Raleway',
            'Open Sans',
        ].join(','),
        h1: {
            fontSize: '2.5rem',
            fontFamily: 'Raleway',
            fontWeight: 'bold',
        },
        h2: {
            fontSize: '2rem',
            fontFamily: 'Open Sans',
            fontWeight: 'bold',
        },
        h3: {
            fontSize: '1.5rem',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
        },
    },
    palette: {
        background: {
            default: '#121212', // Fondo oscuro
        },
        primary: {
            main: '#64B5F6', // Color principal en modo oscuro
        },
        secondary: {
            main: '#FFB74D', // Color secundario en modo oscuro
        },
        error: {
            main: '#EF5350', // Color de error en modo oscuro (rojo menos intenso)
        },
        warning: {
            main: '#FFA000', // Color de advertencia en modo oscuro (naranja menos intenso)
        },
        info: {
            main: '#64B5F6', // Color de información en modo oscuro (coincide con el color principal)
        },
        success: {
            main: '#4CAF50', // Color de éxito en modo oscuro (verde menos intenso)
        },
        text: {
            primary: '#FFFFFF', // Texto blanco en modo oscuro
            secondary: '#B0B0B0', // Texto secundario gris en modo oscuro
        },
    },
});

export { theme, themeDark };
