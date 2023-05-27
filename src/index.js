import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"

// import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Render application
ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <App />
    </>
)

library.add(fas)