import React from 'react'
import { line, curveBundle } from 'd3'

export default data => ({ y = 1 }) => {
  let splines = Math.round(y / 10)

  let lines = Array(splines)
    .fill()
    .map((x, i) =>
      line()
        .x(d => d.x)
        .y(d => d.y)
        .curve(curveBundle.beta(i / splines - 1))(data),
    )

  return (
    <svg width="100%" height="100%">
      {lines.map(d => (
        <path key={d} d={d} stroke="midnightblue" strokeWidth={2} fill="none" />
      ))}
    </svg>
  )
}
