// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimeRunning: false, timeElapsedInSeconds: 0}

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  getMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  getSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  onReset = () => {
    clearInterval(this.timeInterval)
    this.setState({timeElapsedInSeconds: 0, isTimeRunning: false})
  }

  onStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.getMinutes()}:${this.getSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="watch-img"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="timer">{time}</h1>
            <div className="btn-container">
              <button
                className="button start-btn"
                type="button"
                onClick={this.onStart}
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                className="button stop-btn"
                type="button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                className="button reset-btn"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
