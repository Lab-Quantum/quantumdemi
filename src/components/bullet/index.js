import React, {} from 'react'
import { ResponsiveBullet } from '@nivo/bullet'
import Data from './data.json'

const Bullet = () => {

    return(
        <ResponsiveBullet
            rangeColors={[ '#F6ACD2', '#CC90D9', '#A98BD4', '#7F70C1' ]}
            data={Data}
            keys={['confirmed', 'recovered', 'critical', 'deaths']}
            margin={{ top: 50, right: 50, bottom: 50, left: 90 }}
            spacing={46}
            titleAlign="start"
            titleOffsetX={-60}
            measureSize={0.2}
            animate={true}
            motionStiffness={90}
            motionDamping={12}
        />
    )
}

export default Bullet;