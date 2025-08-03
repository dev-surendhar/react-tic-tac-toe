import React from "react";

const Square = (props) => {
  return (
    <div>
      <div onClick={props.onClick} className="square">
        {props.value}
      </div>
    </div>
  );
};

export default Square;
