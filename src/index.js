import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import './components/language/i18n'
import 'react-quill/dist/quill.snow.css' // ES6
import 'react-datepicker/dist/react-datepicker.css'
import ka from 'date-fns/locale/ka'
import { setDefaultLocale } from 'react-datepicker'
setDefaultLocale('ka', ka)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
