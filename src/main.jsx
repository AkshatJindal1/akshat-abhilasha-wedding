import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { APPEARANCE } from './data/appearance';
import { FONTS, DEFAULT_FONT_ID } from './data/fonts';

const activeFont = FONTS.find(f => f.id === APPEARANCE.fontId) || FONTS.find(f => f.id === DEFAULT_FONT_ID);

document.documentElement.dataset.theme = APPEARANCE.themeId;
document.documentElement.dataset.font = activeFont.id;
document.documentElement.dataset.fontCaps = activeFont.caps ? 'true' : 'false';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);