import styling from "../styles/FlexRow.module.css";
import React from "react";
const FlexRow = props => {
  return <div className={styling.FlexRow}>{props.children}</div>;
};

export default FlexRow;
