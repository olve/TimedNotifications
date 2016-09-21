import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import registerServiceWorker from 'serviceworker!./serviceworker.js'

import './styles.css'

registerServiceWorker({scope: '/timer/'}).catch(error => console.log)

const app = <App />
const mount = document.getElementById('app')

ReactDOM.render(app, mount)
