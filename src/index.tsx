import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import { Config } from './mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeAmount={Config.placeAmount}/>
  </React.StrictMode>
);
