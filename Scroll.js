import React from 'react';

const Scroll = (props) => {
    return(
        //used to provide a scroll view
        <div style={{height: '600px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;