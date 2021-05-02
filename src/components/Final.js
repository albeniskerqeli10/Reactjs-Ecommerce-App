import React from 'react'
import {useHistory} from "react-router-dom";
import styling from "../styles/Final.module.css";
const Final = () => {
    const history = useHistory();
    return (
        <div className={styling.Final}>
            <h1>Congratulations, You  just checkout  your order</h1>
            <h4>Order delivers shortly, all the best</h4>
            <h4>Order Id : {Math.floor(Math.random() * 100000000)}</h4>
            <button onClick={e => history.push('/')}>Return to Homepage</button>
        </div>
    )
}

export default Final
