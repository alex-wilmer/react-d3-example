import { Component } from 'react'

export default class extends Component {
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
