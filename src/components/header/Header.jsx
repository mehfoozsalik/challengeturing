import React, { useContext } from "react"
import "./header.css"
import { UserContext } from "../../context/UserContext"
function Header({ logOut }) {
  const { setToken } = useContext(UserContext)
  return (
    <div>
      <div className='uper-space'></div>
      <div className='headerContainer'>
        <h1 className='header'>TESTING APP</h1>
        {logOut ? (
          <div
            onClick={() => {
              localStorage.removeItem("token")
              localStorage.removeItem("email")
              setToken()
            }}
            className='logOutIcon'>
            <img src='https://img.icons8.com/external-others-sbts2018/58/000000/external-logout-social-media-others-sbts2018.png' />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Header
