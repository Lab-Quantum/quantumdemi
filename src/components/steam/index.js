import React from 'react'
import { ResponsiveStream } from '@nivo/stream'
import Data from './data.json'

const Steam = () => {
    return(
        <ResponsiveStream
            curve={'natural'}
            data={Data}
            keys={['Confirmados']}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            axisTop={null}
            axisRight={null}
            colors={[ '#7F70C1' ]}
            enableDots={true}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36
            }}
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    translateX: 100,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                }
            ]}
        />
    )
}

export default Steam