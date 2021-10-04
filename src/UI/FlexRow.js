import styling from "../styles/FlexRow.module.css";
import {memo} from 'react';
const FlexRow = memo((props) => {
  return <section className={styling.FlexRow}>{props.children}</section>;
});

export default FlexRow;
