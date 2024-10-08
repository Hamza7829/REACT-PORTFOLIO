import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/Context';


ReactDOM.render(
  <ThemeProvider>
<React.StrictMode>
      <App />
  </React.StrictMode>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

reportWebVitals();
