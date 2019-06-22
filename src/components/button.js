import React from "react"
import PropTypes from "prop-types"
import buttonStyles from "./button.module.css"

class Button extends React.Component {
  clicked() {
    console.log("clicked")
  }
  render() {
    return (
      <button className={buttonStyles.button}>{this.props.buttonText}</button>
    )
  }
}

Button.propTypes = {
  buttonText: PropTypes.string,
}

export default Button
