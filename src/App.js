import React, { Component } from 'react'
import * as d3 from 'd3'

class MousePosition extends Component {
  state = {}

  saveCoordinates = event =>
    this.setState({ x: event.clientX, y: event.clientY })

  componentDidMount() {
    window.addEventListener('mousemove', this.saveCoordinates)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.saveCoordinates)
  }

  render() {
    return this.props.children(this.state)
  }
}

let renderCurves = data => ({ y = 1 }) => {
  let splines = Math.round(y / 10)

  let lines = Array(splines)
    .fill()
    .map((x, i) =>
      d3
        .line()
        .x(d => d.x)
        .y(d => d.y)
        .curve(d3.curveBundle.beta(i / splines - 1))(data),
    )

  return (
    <svg width="100%" height="100%">
      {lines.map(d => (
        <path key={d} d={d} stroke="midnightblue" strokeWidth={2} fill="none" />
      ))}
    </svg>
  )
}

let data = [
  { x: 50, y: 500 },
  { x: 250, y: 300 },
  { x: 425, y: 450 },
  { x: 650, y: 700 },
  { x: 870, y: 375 },
]

export default () => <MousePosition>{renderCurves(data)}</MousePosition>
