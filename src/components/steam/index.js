import React from 'react'
import { ResponsiveStream } from '@nivo/stream'
import Data from './data.json'

const Steam = () => {
    return(
        <ResponsiveStream
            curve={'natural'}
            data={Data}
            keys={['Casos']}
            margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
            axisTop={null}
            axisRight={null}
            colors={[ '#7F70C1' ]}
            enableDots={true}
        />
    )
}

export default Steam