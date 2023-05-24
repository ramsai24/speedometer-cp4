// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  // onSpeedIncrement() {}

  render() {
    return (
      <div className="speed-container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedImg"
          className="img"
        />
        <h1>Speed is {speed}mph</h1>
        <p>Min Limit is 0mph,Max limit is 200mph</p>

        <div>
          <button type="button">Accelrate</button>
          <button type="button">Apply Brake</button>
        </div>
      </div>
    )
  }
}
export default Speedometer
