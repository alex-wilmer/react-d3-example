import React from 'react'
import MousePosition from './MousePosition'
import CurveBundle from './CurveBundle'
import CustomPath from './CustomPath'

export default ({ data }) => (
  <MousePosition>
    {({ y = 1, x = 1 }) => (
      <CurveBundle data={data} splines={Math.round(y / 10)}>
        {({ paths }) => (
          <svg width="100%" height="100%">
            {paths.map((d, i) => (
              <CustomPath
                key={d}
                d={d}
                message={`The path is: ${d}`}
                hue={i * x / 50}
              />
            ))}
          </svg>
        )}
      </CurveBundle>
    )}
  </MousePosition>
)
