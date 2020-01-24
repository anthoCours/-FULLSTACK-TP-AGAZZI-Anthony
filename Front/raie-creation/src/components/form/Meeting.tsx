

import React, { useState } from 'react'
import { momentLocalizer, Calendar } from 'react-big-calendar'; 
import moment from 'moment'
import * as Antd from 'antd'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import CustomView from '../CustomView';

const MeetingForm: React.FC = () => {
    const localizer = momentLocalizer(moment) 
    const now = new Date()
    const nowbis = new Date(new Date().setHours(new Date().getHours() +1 ))
    const customer = 'Paul'
    const [events, setEvent]: [Array<{start: Date, end: Date, title: string}>, (any)] = useState([]) // {start: now, end: nowbis,title: customer }
    const handleSelect = ({ start, end }: any) => {
        setEvent([
                ...events,
                {
                start,
                end,
                title: customer,
                },
        ]);
    }
    return(
        <div style={{height: '800px'}}>
            <Calendar
                selectable
                localizer={localizer}
                events={events}
                defaultView='week'
                defaultDate={new Date()}
                onSelectEvent={event => console.log(event)}
                onSelectSlot={handleSelect}
                views={{ month: true, week: CustomView }}
            />
        </div>
    )
}
export default MeetingForm;

