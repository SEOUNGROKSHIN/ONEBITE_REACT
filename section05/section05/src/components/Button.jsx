import React from 'react';

function Button({children, text, color = "black"}) {

    // 이벤트 객체
    const onClickButton = (e) => {
        e.preventDefault();
        console.log(color);
    }

    return (
        <button
            onClick={onClickButton}
            style={{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
}

export default Button;