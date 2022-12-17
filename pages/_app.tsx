import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../Components/Layout/Navbar';
import Footer from '../Components/Layout/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
