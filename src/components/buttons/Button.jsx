import React from "react"
import "./buttons.css"

function Button({ varr, text, type }) {
  return (
    <button type={type} style={{ borderRadius: "3rem" }} className={varr}>
      {text}
    </button>
  )
}

export default Button
