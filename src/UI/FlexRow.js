import styling from "../styles/FlexRow.module.css";
import {memo} from 'react';
const FlexRow = memo((props) => {
  return <div className={styling.FlexRow}>{props.children}</div>;
});

export default FlexRow;
