import React from 'react';
import './Title.css';
function Title(props){
    return(
        <div className="title-container">
            <h1 className="title">{props.title} <br />(❁´◡`❁)</h1>
            <br />
            <p className="subtitle">{props.subtitle} <br /> 🎞️</p>
        </div>
    )
}





export default Title;