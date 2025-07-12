import Calendar from './components/calendar/index'
import dayjs from 'dayjs'



function App() {
    return (
        <div>
            <Calendar value={dayjs('2024-11-08') } />
            
        </div>
    )
}
export default App