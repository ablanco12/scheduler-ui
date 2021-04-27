import React from 'react'
import Button from '@material-ui/core/Button';

function DatePicker() {
    return (
        <div className="datepicker">
            <h3>Check in / Check out</h3>
            <input type="date"></input>

            <input type="date"></input>
            <br></br>
            <br></br>
            <Button variant="contained" color="primary">
                Request
            </Button>
            <br></br>
            <br></br>
        </div>
    )
}

export default DatePicker
