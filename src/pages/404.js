import React from "react"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <>
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </>
  )
}

export default NotFound
