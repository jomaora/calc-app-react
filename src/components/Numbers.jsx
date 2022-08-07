import React from "react";
import Proptypes from "prop-types";
import Button from "./Button";

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const renderButtons = onClickNumber => {
  return NUMBERS.map(number => {
   return <Button key={number} text={number.toString()} clickHandler={onClickNumber} />;
  });
};

const Numbers = ({onClickNumber}) => {
  return (
    <section className="numbers">
      {renderButtons(onClickNumber)}
    </section>
  );
};

Numbers.propTypes = {
  onClickNumber: Proptypes.func
};

export default Numbers;
