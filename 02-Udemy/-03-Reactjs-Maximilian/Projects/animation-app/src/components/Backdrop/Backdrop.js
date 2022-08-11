import React from "react";

import "./Backdrop.css";

const backdrop = props => (
  <div className={props.show ? "BackdrobOpen" : "BackdrobClosed"}></div>
);

export default backdrop;
