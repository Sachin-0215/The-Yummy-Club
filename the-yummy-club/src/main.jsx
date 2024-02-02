import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Provider } from 'react-redux';
import Store from './redux/Store.js';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-illd28ipycnh0asn.us.auth0.com"
    clientId="vuAZaUfYFqxwdgeuWT9yURe9NTqyAsjf"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <React.StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
      </React.StrictMode>,
  </Auth0Provider>
)
