import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DarkMode from '@mui/icons-material/DarkMode'; // Luna
import Brightness5Icon from '@mui/icons-material/Brightness5'; // Sol

import { Instagram, LinkedIn, GitHub } from '@mui/icons-material';

const Header = ({ darkMode, toggleDarkMode }) => {
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
                    startIcon={darkMode ? <DarkMode /> : <Brightness5Icon />} // Cambia el icono
                    onClick={toggleDarkMode}
                >
                    {darkMode ? '' : ''}
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
