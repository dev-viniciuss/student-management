import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/Global.css';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
