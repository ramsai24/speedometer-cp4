// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onSpeedIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(preState => {
        console.log(`${preState.speed}`)
        return {speed: preState.speed + 10}
      })
    } else {
      this.setState(preState => {
        console.log(`${preState.speed}`)
        return {speed: 200}
      })
    }
  }

  onSpeedDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(preState => {
        console.log(`${preState.speed}`)
        return {speed: preState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speed-container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        />
        <h1>Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btnContainer">
          <button
            className="increment"
            type="button"
            onClick={this.onSpeedIncrement}
          >
            Accelerate
          </button>
          <button
            className="decrement"
            type="button"
            onClick={this.onSpeedDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
