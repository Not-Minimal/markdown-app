import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css';
import Header from './components/Header';
import FooterWithSocialMediaIcons from './components/Footer';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <LandingPage />
        <FooterWithSocialMediaIcons />
      </div>
      { }
    </ThemeProvider>
  );
}

export default App;
