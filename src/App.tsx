import { useRoutes } from 'react-router-dom';
import './App.css';
import { CssBaseline } from '@mui/material';
import router from './router';

import ThemeProvider from './theme/ThemeProvider';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
}

export default App;
