import React from 'react'
import Calendar from '../../components/calendar'
import Steam from '../../components/steam'
import './home.css'

const Home = () => {
    return(
        <div className="containerHome">
            <div className="calendarContainer">
                <Calendar />
            </div>
            <div className="calendarContainer">
                <Steam />
            </div>
        </div>
    )
}

export default Home