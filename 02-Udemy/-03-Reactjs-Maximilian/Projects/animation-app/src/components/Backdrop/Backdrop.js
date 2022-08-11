import React from "react";

import "./Backdrop.css";

const backdrop = props => (
  <div
    className={`Backdrop ${props.show ? "BackdrobOpen" : "BackdrobClosed"}`}
  ></div>
);

export default backdrop;
