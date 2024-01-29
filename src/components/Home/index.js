import {Component} from 'react'

import Header from '../Header'
import Scroll from '../Scroll'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <div className="bg-img">
          <Header />
          <Scroll />
        </div>
      </>
    )
  }
}

export default Home
