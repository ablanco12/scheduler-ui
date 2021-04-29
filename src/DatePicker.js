import React from 'react'
import Button from '@material-ui/core/Button';

function DatePicker() {
    return (
        <div id="" className="datepicker">
            <h3>Check in / Check out</h3>
            
             <div className="datepicker__search">
                <input type="date"></input>
                &nbsp;
                &nbsp;
                <input type="date"></input>
                &nbsp;
                &nbsp;
                <Button variant="contained" color="primary">
                    Request
                </Button>
            </div>  
        </div>
    )
}

export default DatePicker
