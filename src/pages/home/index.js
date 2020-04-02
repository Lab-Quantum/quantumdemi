import React from 'react'
import Calendar from '../../components/calendar'
import Steam from '../../components/steam'
import Bullet from '../../components/bullet'
import './home.css'

const Home = () => {
    return(
        <div className="containerHome">
            <div className="calendarContainer">
                <Calendar />
            </div>
            <div className="others">
                <div className="steamContainer">
                    <Steam />
                </div>
                <div className="bulletContainer">
                    <Bullet />
                </div>
            </div>
        </div>
    )
}

export default Home