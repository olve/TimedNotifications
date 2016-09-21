import React from 'react'
import autobind from 'autobind-decorator'

@autobind
export default class TimeInput extends React.Component {

  static contextTypes = {
    setTime: React.PropTypes.func.isRequired,
  }

  onChange(event) {
    const time = parseInt(event.target.value) || 20
    this.context.setTime(time)
  }

  render() {
    return (
      <div>
        <input onChange={this.onChange.bind(this)} type="number" min={0} placeholder={20} />
      </div>
    )
  }

}
