import React, { useState, useEffect, useContext } from "react"
import { URL } from "../utilities/url"
import axios from "axios"
import { UserContext } from "./UserContext"
const LogsContext = React.createContext()
function LogsProvider({ children }) {
  const { token } = useContext(UserContext)
  const [posts, setPosts] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [offset, setOffset] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  let limit = 10
  let email = localStorage.getItem("email")

  useEffect(() => {
    axios
      .get(URL + `calls?offset=${offset}&limit=${limit}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setPosts(res.data.nodes)
        setTotalCount(res.data.totalCount)
        console.log(res)
        setLoaded(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [token][offset])
  return (
    <LogsContext.Provider
      value={{
        posts,
        loaded,
        offset,
        setOffset,
        setLoaded,
        email,
        limit,
        totalCount,
      }}>
      {children}
    </LogsContext.Provider>
  )
}
export { LogsContext, LogsProvider }
