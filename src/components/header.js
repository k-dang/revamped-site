import PropTypes from "prop-types"
import React from "react"
import Button from "./button"
import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerRow}>
      <h2 className={headerStyles.h2}>{siteTitle}</h2>
      <Button buttonText="Download PDF"></Button>
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
