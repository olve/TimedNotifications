import React from 'react'
import autobind from 'autobind-decorator'

import Clock from './Clock'
import TimeInput from './TimeInput'
import Buttons from './Buttons'

import vibrate from '../../vibrate'

@autobind
export default class Timer extends React.Component {

  state = {
    time: 0,
    paused: false,
    showClock: false,
    repeat: true,
  }

  static childContextTypes = {
    reset: React.PropTypes.func,
    start: React.PropTypes.func,
    pause: React.PropTypes.func,
    setTime: React.PropTypes.func,
    togglePaused: React.PropTypes.func,
    toggleRepeat: React.PropTypes.func,
    onTimeout: React.PropTypes.func,

    repeat: React.PropTypes.bool,
    paused: React.PropTypes.bool,
    showClock: React.PropTypes.bool,

    time: React.PropTypes.any,
  }

  getChildContext() {
    return {
      time: this.state.time,
      showClock: this.state.showClock,
      paused: this.state.paused,
      repeat: this.state.repeat,

      onTimeout: this.onTimeout,
      setTime: this.setTime,
      togglePaused: this.togglePaused,
      toggleRepeat: this.toggleRepeat,
      reset: this.reset,
      start: this.start,
      pause: this.pause,

    }
  }

  setTime(time)         { this.setState({time}) }
  reset()               { this.setState({time: 0, showClock: false}) }
  togglePaused()        { this.setState({paused: !this.state.paused}) }
  toggleRepeat()        { this.setState({repeat: !this.state.repeat}) }
  start()               { this.setState({showClock: true}) }
  pause()               { this.setState({paused: true}) }
  onTimeout() {
    console.log('timeout')
    vibrate(2000)
  }

  render() {
    return (
      <div>
        { this.state.showClock ? <Clock /> : <TimeInput /> }
        <Buttons />
      </div>
    )
  }
}
