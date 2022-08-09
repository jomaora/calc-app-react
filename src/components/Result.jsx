import React from "react";
import PropTypes from "prop-types";

const Result = ({value}) => {
  return (<div className="result">
    <span>{value === '' ? 0 : value}</span>
  </div>);
};

Result.propTypes = {
  value: PropTypes.number.isRequired
};

Result.defaultProps = {
  value: 0
};

export default Result;