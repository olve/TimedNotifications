import React from 'react'
import autobind from 'autobind-decorator'

@autobind
export default class Clock extends React.Component {

  static contextTypes = {
    time: React.PropTypes.number.isRequired,
    paused: React.PropTypes.bool.isRequired,
    repeat: React.PropTypes.bool.isRequired,
    onTimeout: React.PropTypes.func.isRequired,
    pause: React.PropTypes.func.isRequired,
  }

  componentDidMount()     { this.interval = setInterval(this.tick, 1000) }
  componentWillUnmount()  { clearInterval(this.interval) }

  state = {
    timer: 0
  }

  tick() {
    if (!this.context.paused) {
      this.setState({timer: this.state.timer+1})
      if (this.state.timer === this.context.time) {
        this.context.onTimeout()
        if (!this.context.repeat) {
          this.context.pause()
        }
        this.setState({timer: 0})
      }
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.timer}</p>
      </div>
    )
  }

}
