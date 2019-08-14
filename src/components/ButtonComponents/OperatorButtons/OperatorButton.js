import React from "react";
import { operators } from "../../../data";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;
