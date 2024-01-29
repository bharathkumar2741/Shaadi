import {HiMiniPencilSquare} from 'react-icons/hi2'
import {IoIosContacts} from 'react-icons/io'
import {IoVideocamOffOutline} from 'react-icons/io5'

import './index.css'

const Details = () => (
  <div className="bg-Details">
    <div className="card1">
      <div className="content">
        <h1 className="ex-head">
          Exclusive & Personalised Matchmaking by Shaadi.com
        </h1>
        <p className="to-para">
          Top Rated Consultants | 5 times higher success rates | 100% Privacy
        </p>
      </div>
      <div className="verticalline" />
      <div>
        <h1>
          <span className="vi-span">VIP</span>SAAGHI
        </h1>
        <div>
          <button className="ge-btn">Get Invited</button>
        </div>
      </div>
    </div>

    <h1 className="fi-head">Find your Special Someone</h1>

    <div className="card2">
      <div className="icon-card">
        <div className="icon1">
          <HiMiniPencilSquare className="icon" />
        </div>
        <h1 className="si-head">Sign Up</h1>
        <p>Register for free & put up your Matrimony Profile</p>
      </div>
      <div className="icon-card">
        <div className="icon2">
          <IoIosContacts className="icon" />
        </div>
        <h1 className="si-head">Connect</h1>
        <p>Select & Connect with Matches you like</p>
      </div>
      <div className="icon-card">
        <div className="icon3">
          <IoVideocamOffOutline className="icon" />
        </div>
        <h1 className="si-head">Interact</h1>
        <p>Become a Premium Member & Start a Conversation</p>
      </div>
    </div>
  </div>
)
export default Details
