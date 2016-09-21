import React from 'react'
import autobind from 'autobind-decorator'

@autobind
export default class Buttons extends React.Component {

  static contextTypes = {
    reset: React.PropTypes.func.isRequired,
    start: React.PropTypes.func.isRequired,
    togglePaused: React.PropTypes.func.isRequired,
    toggleRepeat: React.PropTypes.func.isRequired,


    paused: React.PropTypes.bool.isRequired,
    showClock: React.PropTypes.bool.isRequired,
    repeat: React.PropTypes.bool.isRequired,
  }

  get startOrPauseButton() {
    return this.context.showClock ?
      <button onClick={this.togglePaused.bind(this)}>{this.context.paused ? 'Start' : 'Pause'}</button>
      : <button onClick={this.start.bind(this)}>'Start'</button>
  }

  togglePaused() { this.context.togglePaused() }
  toggleRepeat() { this.context.toggleRepeat() }
  start()        { this.context.start() }
  reset()        { this.context.reset() }

  render() {
    return (
      <div>
        { this.context.showClock ? <button onClick={this.reset.bind(this)}>Reset</button> : null }
        { this.startOrPauseButton }
        <label>
          Repeat:
          <input checked={this.context.repeat} type="checkbox" onChange={this.toggleRepeat.bind(this)}/>
        </label>
      </div>
    )
  }

}
