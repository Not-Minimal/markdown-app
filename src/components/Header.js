import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import { Instagram, LinkedIn, GitHub } from '@mui/icons-material';

const Header = () => {
    // Estado para controlar el tema claro/oscuro
    const [darkMode, setDarkMode] = useState(false);

    // Función para cambiar entre temas claro y oscuro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Aquí puedes implementar lógica para cambiar el tema de tu aplicación
        // por ejemplo, cambiando las clases CSS o utilizando una biblioteca de temas
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Markdown Merge
                </Typography>
                <IconButton
                    color="inherit"
                    aria-label="LinkedIn"
                    onClick={() => window.open('https://www.linkedin.com/in/notminimal')}
                >
                    <LinkedIn />
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="GitHub"
                    onClick={() => window.open('https://github.com/Not-Minimal')}
                >
                    <GitHub />
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="Instagram"
                    onClick={() => window.open('https://www.instagram.com/nottminimal/')}
                >
                    <Instagram />
                </IconButton>
                <Button
                    color="inherit"
                    startIcon={<Brightness4Icon />}
                    onClick={toggleDarkMode}
                >
                    Dark Mode
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
