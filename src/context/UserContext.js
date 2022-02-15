import { createContext, useState } from "react"
import axios from "axios"
import { URL } from "../utilities/url"

const UserContext = createContext()
function UserProvider({ children }) {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [passwordError, setpasswordError] = useState("")
  const [emailError, setemailError] = useState("")
  const [token, setToken] = useState()
  const handleValidation = (event) => {
    let formIsValid = true

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      setemailError("missing something! not a valid email")
      formIsValid = false
      return false
    } else {
      setemailError("")
      formIsValid = true
    }

    if (!password.match(/^[a-z,A-Z]{6,16}$/)) {
      setpasswordError("only alphabets between 6 to 16 letters")
      formIsValid = false
      return false
    } else {
      setpasswordError("")
      formIsValid = true
    }
    return formIsValid
  }
  const userObject = {
    username: email,
    password: password,
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("email", email)
    if (handleValidation()) {
      axios
        .post(URL + "auth/login", userObject)
        .then((res) => {
          console.log(res.data)
          console.log(res.data.access_token)
          setToken(res.data.access_token)
          localStorage.setItem("token", res.data.access_token)
        })
        .catch((error) => {
          console.log(error)
          setToken()
        })
    }
  }
  return (
    <UserContext.Provider
      value={{
        handleSubmit,
        token,
        setToken,
        password,
        setPassword,
        email,
        setEmail,
        passwordError,
        setpasswordError,
        emailError,
        setToken,
        setemailError,
      }}>
      {children}
    </UserContext.Provider>
  )
}
export { UserContext, UserProvider }
