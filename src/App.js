/** @format */

import { HashRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages';
import Protected from './context/Protected';
import { ThemeProvider, createTheme } from '@mui/material/styles';
let theme = createTheme({ typography: { color: 'black', button: { textTransform: 'none' } } });
function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<Protected />} />
          <Route path='/*' element={<Protected />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
