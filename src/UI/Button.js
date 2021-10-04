import {memo} from 'react';

const Button = memo(({children, bgColor, textColor , padding , onClick , radius , fontSize , margin, display, direction, ariaLabel }) => {
    const ButtonStyle = {
        backgroundColor:bgColor || "#FE3E36",
        color:textColor || "#fff",
        padding:padding,
        borderRadius:radius,
        fontSize:fontSize || "15px",
        margin:margin,
        display:display || "flex",
        flexDirection:direction,
        alignItems:"center",
        justifyContent:"center",
        

    }
    return (
        <button style={ButtonStyle} aria-label={ariaLabel} onClick={onClick}>{children}</button>
    )
})

export default Button;