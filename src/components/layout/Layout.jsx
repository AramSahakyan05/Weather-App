import React from 'react'

const Layout = ({children}) => {
    const defaultStyles = {
        width: "100%"
    }
  return (
    <>
      <header></header>
      <main style={defaultStyles}>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
