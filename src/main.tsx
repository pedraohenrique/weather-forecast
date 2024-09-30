import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Layout } from './components';
import { WeatherForecastPage } from './pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <WeatherForecastPage />
    </Layout>
  </StrictMode>
);
