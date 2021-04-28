import React from 'react'
import Calendar from 'react-awesome-calendar';
import DatePicker from './DatePicker'
import {Carousel} from 'react-bootstrap'
import './Schedule.css'

const events = [{
    id: 1,
    color: '#fd3153',
    from: '2021-05-02T18:00:00+00:00',
    to: '2021-05-05T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2021-05-01T13:00:00+00:00',
    to: '2021-05-05T14:00:00+00:00',
    title: 'This is another event'
}, {
    id: 3,
    color: '#3694DF',
    from: '2021-05-05T13:00:00+00:00',
    to: '2021-05-05T20:00:00+00:00',
    title: 'This is also another event'
}];


function Schedule() {
    return (
        <div className="scheduler">
            <div className="scheduler__calendar">
                <Calendar
                events={events}
                />
            </div>
            
            <div className="scheduler__images">
            <DatePicker />
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='https://github.com/ablanco12/scheduler-ui/blob/master/public/assets/lake1.JPG?raw=true'
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://github.com/ablanco12/scheduler-ui/blob/master/public/assets/lake2.JPG?raw=true"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://github.com/ablanco12/scheduler-ui/blob/master/public/assets/lake3.JPG?raw=true"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://github.com/ablanco12/scheduler-ui/blob/master/public/assets/lake4.JPG?raw=true"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://github.com/ablanco12/scheduler-ui/blob/master/public/assets/lake5.JPG?raw=true"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://github.com/ablanco12/scheduler-ui/blob/master/public/assets/lake6.JPG?raw=true"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://github.com/ablanco12/scheduler-ui/blob/master/public/assets/lake7.JPG?raw=true"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}


export default Schedule
