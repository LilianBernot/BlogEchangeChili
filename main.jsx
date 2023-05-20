import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './shared/header.jsx'
import Footer from './shared/footer.jsx'
import Routing from './shared/Routing.jsx'

import "./style/main.css"
import "./style/images.css"
import "./style/responsive.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div class="page">
      <Routing />
    </div>
    <Footer />
  </React.StrictMode>,
)
