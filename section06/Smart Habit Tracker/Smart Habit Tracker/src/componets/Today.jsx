import React from 'react';
import useState from 'react';
function Today(props) {

    const today = new Date().toISOString().slice(0, 10);

    return (
        <div>{today}</div>
    );
}

export default Today;