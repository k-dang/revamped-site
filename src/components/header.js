import PropTypes from "prop-types"
import React from "react"
import Button from "./button"
import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerRow}>
      <h1 className={headerStyles.headerName}>{siteTitle}</h1>
      <a href={"Resume.pdf"}>
        <Button buttonText="Download Resume"></Button>
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
