import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )
  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.author} />
      <div className="layout">{children}</div>
      <footer>
        © {new Date().getFullYear()} Kevin Dang
        <div className="links">
          <a href="https://github.com/k-dang">Github</a> |{" "}
          <a href="https://www.linkedin.com/in/kdang1/">LinkedIn</a> |{" "}
          <a href="mailto:dangkevin12@gmail.com">Email Me</a>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
