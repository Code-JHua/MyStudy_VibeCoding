// 若使用 TypeScript 找不到 SCSS 模块，可尝试添加类型声明文件或使用 @ts-ignore 忽略类型检查
// @ts-ignore
import './index.scss'
import MonthCalendar from './MonthCalendar'
import { Dayjs } from 'dayjs'
import Header from './Header'

export interface CalendarProps {
    value: Dayjs
}

function Calendar(props: CalendarProps) {

    return (
        <div className="calendar">
            <Header />
            <MonthCalendar {...props} />
        </div>
    )
}

export default Calendar