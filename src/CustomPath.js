import React from 'react'

export default ({ hue, message, ...props }) => (
  <path
    onClick={() => alert(message)}
    stroke={`hsl(${hue}, 80%, 50%)`}
    strokeWidth={2}
    fill="none"
    {...props}
  />
)
