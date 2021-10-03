import styling from "../styles/FlexRow.module.css";
const FlexRow = props => {
  return <div className={styling.FlexRow}>{props.children}</div>;
};

export default FlexRow;
