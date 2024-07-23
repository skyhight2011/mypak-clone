import './App.css';
import { CssBaseline } from '@mui/material';

import ThemeProvider from './theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div>hello world</div>
    </ThemeProvider>
  );
}

export default App;
