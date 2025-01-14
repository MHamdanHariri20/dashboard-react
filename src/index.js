import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'
import { AuthProvider } from './views/pages/login/context/AuthProvider'

import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RecoilRoot>
      <AuthProvider>
        <App />
      </AuthProvider>
    </RecoilRoot>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
