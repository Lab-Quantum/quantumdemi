import React from 'react'
import Calendar from '../../components/calendar'
import './home.css'

const Home = () => {
    return(
        <div className="containerHome">
            <div className="calendarContainer">
                <Calendar />
            </div>
        </div>
    )
}

export default Home