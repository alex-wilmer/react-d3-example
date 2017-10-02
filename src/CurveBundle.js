import { line, curveBundle } from 'd3'

export default ({ data, splines = 1, children }) => {
  let paths = Array(splines)
    .fill()
    .map((x, i) =>
      line()
        .x(d => d.x)
        .y(d => d.y)
        .curve(curveBundle.beta(i / splines - 1))(data),
    )

  return children({ paths })
}
