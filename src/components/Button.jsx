import React from "react";
import Proptypes from "prop-types";

const Button = ({text, type, clickHandler}) => {
  return (<button className={type} onClick={() => {
    clickHandler(text);
  }} >
    <span>{text}</span>
  </button>)
};

Button.propTypes = {
  text: Proptypes.string.isRequired,
  type: Proptypes.string,
  clickHandler: Proptypes.func.isRequired
};

export default Button;