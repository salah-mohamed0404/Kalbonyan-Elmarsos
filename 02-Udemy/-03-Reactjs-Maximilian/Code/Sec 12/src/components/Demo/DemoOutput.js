import React from "react";

const DemoOutput = function (props) {
  return <p>{props.show ? "This os new!" : ""}</p>;
};

export default React.memo(DemoOutput);
