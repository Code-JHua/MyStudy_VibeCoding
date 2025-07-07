import { useState } from 'react'
import './index.css'

function Calendar(props) {
    const { defaultValue, onChange } = props

    const [date, setDate] = useState(defaultValue)

    const preMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
    }

    const nextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
    }

    const daysOfMonth = (year, month) => {
        const lastDay = new Date(year, month + 1, 0)
        return lastDay.getDate()
    }

    const firstDayOfMonth = (year, month) => {
        return new Date(year, month - 1, 1).getDay()
    }

    const selectDay = (day) => {
        setDate(new Date(date.getFullYear(), date.getMonth(), day))
        onChange(new Date(date.getFullYear(), date.getMonth(), day))
    }

    const renderDates = () => {
        const days = []
        const daysCount = daysOfMonth(date.getFullYear(), date.getMonth())
        const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth())

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className='empty'></div>)
        }
        for (let i = 1; i <= daysCount; i++) {
            if(i === date.getDate()) {
                days.push(<div key={`day-${i}`} className='day selected' onClick={() => selectDay(i)}>{i}</div>)
            } else {
                days.push(<div key={`day-${i}`} className='day' onClick={() => selectDay(i)}>{i}</div>)
            }
        }
        return days
    }



    return (
        <div className="calendar">
            <div className="header">
                <button onClick={preMonth}>&lt;</button>
                <div>{date.getFullYear()} 年 {date.getMonth() + 1} 月</div>
                <button onClick={nextMonth}>&gt;</button>
            </div>
            <div className="body">
                <div className="day">日</div>
                <div className="day">一</div>
                <div className="day">二</div>
                <div className="day">三</div>
                <div className="day">四</div>
                <div className="day">五</div>
                <div className="day">六</div>
                {renderDates()}
            </div>
        </div>
    )
}
export default Calendar
