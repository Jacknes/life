import React, { Component } from 'react';

import Circle from './Circle';

//const _lifeExpectancy = 80.7 * 12;


const LifeInMonths = (props) => {
    const _lifeExpectancy = 90 * 12;
    var split = props.dob.split(/\D/);
    let dob = new Date(split[0], --split[1], split[2]);
    let current = new Date();
    let years = ((current.getFullYear() - dob.getFullYear()) * 12);
    let months = (current.getMonth() - dob.getMonth());
    let difference = (years + months);
    console.log(difference);
    
    let colours = [];
    for (let i = 0; i < _lifeExpectancy; i++) {
        if (i < difference)
            colours.push('f');
        else 
            colours.push('e');
    }

    let circleObjects = colours.map((result) => {
        return <Circle 
                colour={result}
                frame='month'/>
    });
    
    return (
        <div class="life-in-months">
            <h3>Your life in Months</h3>
            <p>Each row represents 36 months or 3 years.</p>
            {circleObjects}
            <br/>
            <p>You have lived for {difference} months. Only {_lifeExpectancy - difference} to go! (Assuming you live the average: {_lifeExpectancy / 12})</p>
        </div>
    );
}

export default LifeInMonths;