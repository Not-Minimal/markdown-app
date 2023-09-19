import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme, themeDark } from './theme'; // Importa ambos temas
import './App.css';
import Header from './components/Header';
import FooterWithSocialMediaIcons from './components/Footer';
import LandingPage from './components/LandingPage';

function App() {
  // Estado para controlar el tema claro/oscuro
  const [darkMode, setDarkMode] = useState(false);

  // Función para cambiar entre temas claro y oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <div>
        {/* Pasa el estado darkMode y la función toggleDarkMode al componente Header */}
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <LandingPage />
      </div>
      <FooterWithSocialMediaIcons />
    </ThemeProvider>
  );
}

export default App;
