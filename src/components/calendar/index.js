import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'
import Data from './data.json'

const Calendar = () => {
    return(
        <ResponsiveCalendar
            data={Data}
            keys={['Confirmados']}
            from="2020-01-02"
            to="2020-3-31"
            emptyColor="#eeeeee"
            colors={[ '#F6ACD2', '#CC90D9', '#A98BD4', '#7F70C1' ]}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 50,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 75,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left'
                }
            ]}
        />
    )
}

export default Calendar;