import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import { renderToString } from 'react-dom/server'
import Header from '../components/Header'
import routes from "../router";

export default (req) => {
  const App = () => {
    return (
      <>
        <StaticRouter location={req.path}>
          {/* <Header></Header> */}
          <div>
            {renderRoutes(routes)}
          </div>
        </StaticRouter>
      </>
    )
  }
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="app">${renderToString(<App />)}</div>
    <script src='/index.js'></script>
  </body>
  </html>`
}