import React from 'react'
import Calendar from 'react-awesome-calendar';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

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

var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        image: "https://github.com/ablanco12/scheduler-ui/blob/master/src/assets/lake1.JPG"

    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

function Schedule() {
    return (
        <div className="scheduler">
            <div className="scheduler__calendar">
                <Calendar
                events={events}
                />
            </div>
            <div className="scheduler__images">
                <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
                </Carousel>
                
            </div>
        </div>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img href={props.item.image} alt=""/>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Schedule
