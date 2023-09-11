import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import './Footer.css';

const Footer = () => {

    // Función para llamar al número de teléfono
    const handlePhoneClick = () => {
        window.location.href = 'tel:+56933111487';
    };

    // Función para abrir el cliente de correo electrónico predeterminado con la dirección de correo electrónico
    const handleEmailClick = () => {
        window.location.href = 'mailto:minimalservices@gmail.com';
    };



    return (
        <footer className='footer'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Información de Contacto</Typography>
                    <Typography>
                        Concepcion, Region del BioBio, Chile.
                    </Typography>
                    <Typography onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
                        Teléfono: +569 3311 1487
                    </Typography>
                    <Typography onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                        Correo Electrónico: minimalservices@gmail.com
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Enlaces Útiles</Typography>
                    <ul>
                        <li>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/acerca">Acerca de Nosotros</Link>
                        </li>
                        <li>
                            <Link href="/contacto">Contacto</Link>
                        </li>
                        <li>
                            <Link href="/terminos">Términos y Condiciones</Link>
                        </li>
                    </ul>
                </Grid>
            </Grid>
            <hr />
            <Typography variant="body2" color="white" align="center">
                © {new Date().getFullYear()} MarkdownMerge. Todos los derechos reservados.
            </Typography>
        </footer>
    );
};

export default Footer;
