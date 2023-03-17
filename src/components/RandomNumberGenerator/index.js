// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onGenerateRandomNum = () => {
    const randomNum = this.getRandomNum()

    this.setState(prevSate => ({
      count: prevSate.count + randomNum,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-cont">
        <div className="card-cont">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="btn-cont">
            <button
              className="button"
              type="button"
              onClick={this.onGenerateRandomNum}
            >
              Generate
            </button>
          </div>
          <p className="random-num">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
