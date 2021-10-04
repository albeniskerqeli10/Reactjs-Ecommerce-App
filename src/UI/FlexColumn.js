import styling from "../styles/FlexColumn.module.css";
import {memo} from 'react';
const FlexColumn = memo((props) => {
  return (
  <div className={styling.FlexColumn}>
      <div className={styling.FlexColumnInfo}>
<div className={styling.FlexInfo}>
<h1>Image</h1>
      </div>
      <div className={styling.FlexInfo}>
<h1>Name</h1>
      </div>
      <div className={styling.FlexInfo}>
<h1>Quantity</h1>
      </div>

      <div className={styling.FlexInfo}>
<h1>Price</h1>
      </div>
      </div>
  {props.children}
  
  </div>
  )});

export default FlexColumn;
