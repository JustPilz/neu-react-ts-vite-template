import './styles/index.css';

import { app, events, init, window as neuWindow } from '@neutralinojs/lib';

import { App } from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

if (import.meta.env.DEV) {
  /*
  try {
    // method 1
    const storedToken = sessionStorage.getItem('NL_TOKEN');
    if (storedToken) window.NL_TOKEN = storedToken;

    // method 2
    const authInfo = require('../../.tmp/auth_info.json');
    const { accessToken, port } = authInfo;
    window.NL_PORT = port;
    window.NL_TOKEN = accessToken;
    window.NL_ARGS = [
      'bin\\neutralino-win_x64.exe',
      '',
      '--load-dir-res',
      '--path=.',
      '--export-auth-info',
      '--neu-dev-extension',
      '--neu-dev-auto-reload',
      '--window-enable-inspector',
    ];

  } catch {
    console.error(
      'Auth file not found, native API calls will not work.'
    );
  }
  */
}

init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function onWindowClose() {
  app.exit();
}

events.on('windowClose', onWindowClose);

neuWindow.focus();
