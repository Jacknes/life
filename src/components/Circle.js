import React from 'react';

const Circle = (props) => {

    const imageSrc = props.colour === 'e' ? "/resources/Empty-Circle.png" : "/resources/Full-Circle.png";
    return (
        <div className='circle-div'>
            <img src={imageSrc} className={`${props.frame}-circle`}/>
        </div>
    );
};
export default Circle