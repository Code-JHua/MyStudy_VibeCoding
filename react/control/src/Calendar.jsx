import { useState } from 'react'
import './Calendar.css'
import CalendarChild from './calendar/index.jsx'

function Calendar() {
    return <CalendarChild
                defaultValue={new Date()}
                onChange={(newDate) => {
                    alert(newDate.toLocaleDateString());
                }}
            ></CalendarChild>
}
export default Calendar
