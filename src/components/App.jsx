import React from 'react'
import autobind from 'autobind-decorator'

import Timer from './Timer'

@autobind
export default class App extends React.Component {

  render() {
    return (
      <div>
        <Timer />
      </div>
    )
  }
}
