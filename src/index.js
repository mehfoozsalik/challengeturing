import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { UserProvider } from "./context/UserContext"
import { LogsProvider } from "./context/LogsContext"

ReactDOM.render(
  <UserProvider>
    <LogsProvider>
      <App />
    </LogsProvider>
  </UserProvider>,
  document.getElementById("root"),
)
