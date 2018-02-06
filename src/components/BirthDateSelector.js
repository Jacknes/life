import React from 'react';

const BirthDateSelector = (props) => {

    const onDobChanged = props.onDobChanged;
    let today = new Date();    //was used for setting the max value of the date picker to today. 
    let dd = today.getDate().toString().length === 1 ? '0'+today.getDate() : today.getDate();
    let mm = (today.getMonth()+1).toString().length === 1 ? '0'+(today.getMonth()+1) : (today.getMonth()+1);
    let yyyy = today.getFullYear();

    const collectDob = () => {

    }

    return (
        <div className='birth-date-selector'>
            <h3>Enter your date of birth below</h3>
            <br/>
            {/* <input className='date' placeholder='year (eg. 1990)'/>
            <input className='date' placeholder='month (eg. 08)'/>
            <input className='date' placeholder='day (eg. 05)'/> */}

            <input type='date' 
                onChange={(event) => onDobChanged(event.target.value)} 
                max={`${yyyy}-${mm}-${dd}`}
                />
                <br/>
            {/* <input type="radio" name="mgender" value="male" checked /> Male <br/>
            <input type="radio" name="fgender" value="female" /> Female */}
        </div>
    );
}

export default BirthDateSelector;