import React from "react";
import { Row } from "antd";

const Clock = props => {
  return <h1 style={{ fontSize: 5 + "rem" }}>{props.children}</h1>;
};

export default Clock;
