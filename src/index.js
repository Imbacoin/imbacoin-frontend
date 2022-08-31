import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import App from './App';
import PageFunction from './views/FunctionPage';
import './styles/index.css';

i18n.load('en');
// i18n.load('ru');
i18n.activate('en');

ReactDOM.render(
  <BrowserRouter>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
