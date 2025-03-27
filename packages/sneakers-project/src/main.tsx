import React from 'react';
import ReactDOM from 'react-dom/client';
import '@shared/i18n';

import { AppShell } from '@shared';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppShell>
    <App />
  </AppShell>,
);
