import { ThemeProvider } from 'styled-components';

import { MainLayout } from 'layouts/MainLayout';

import { GlobalStyles } from 'ui/theme/global';
import { baseTheme } from 'ui/theme/theme';

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <MainLayout />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
