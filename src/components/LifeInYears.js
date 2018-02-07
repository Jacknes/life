import React, { Component } from 'react';

import Circle from './Circle';

const LifeInYears = (props) => {
    const _lifeExpectancy = props.LifeExpectancy;
    var split = props.dob.split(/\D/);
    let dob = new Date(split[0], --split[1], split[2]);
    let current = new Date();
    let years = (current.getFullYear() - dob.getFullYear());
    let months = (current.getMonth() - dob.getMonth());
    console.log('months', months);
    console.log('years ', years);
    let difference = months < 0 ? years - 1 : years;
    //let difference = years;
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
                frame='year'/>
    });
    
    return (
        <div class="life-in-years">
            <h3>Your life in Years</h3>
            {circleObjects}
            <br/>
            <p>You have lived for {difference} years. Only {_lifeExpectancy - difference} to go! (Assuming you live the average: {_lifeExpectancy})</p>
        </div>
    );
}

export default LifeInYears;