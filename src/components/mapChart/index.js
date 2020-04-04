import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import countries from "./world_countries.json";
import Data from "./data.json";

const MapChart = () => {
  return (
    <ResponsiveChoropleth
      data={Data}
      features={countries.features}
      colors={[ '#F6ACD2', '#CC90D9', '#A98BD4', '#7F70C1', ]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      projectionTranslation={[ 0.5, 0.5 ]}
      projectionRotation={[ 0, 0, 0 ]}
      enableGraticule={false}
      graticuleLineColor="#dddddd"
      borderWidth={0.3}
      borderColor="#152538"
      domain={[0, 1000000]}
      legends={[
        {
          anchor: "left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: "#444444",
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
}

export default MapChart;