import styling from "../styles/FlexColumn.module.css";
const FlexColumn = props => {
  return (
  <div className={styling.FlexColumn}>
      <div className={styling.FlexColumnInfo}>
<div className={styling.FlexInfo}>
<h1>Product Image</h1>
      </div>
      <div className={styling.FlexInfo}>
<h1>Product Name</h1>
      </div>
      <div className={styling.FlexInfo}>
<h1>Product Qty</h1>
      </div>

      <div className={styling.FlexInfo}>
<h1>Product Price</h1>
      </div>
      </div>
  {props.children}
  
  </div>
  )};

export default FlexColumn;
