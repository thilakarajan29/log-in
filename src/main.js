import { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const Main = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="main">
      <h1>Sign up to get clients</h1>
      <div className="names">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
      </div>
      <div className="email-pass">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="Password" />
      </div>
      <div class="dropdown">
        <div
          className="dropbtn"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <p>select state</p>
          <AiFillCaretDown />
        </div>
        <div
          id="myDropdown"
          class={`dropdown-menu ${open ? 'active' : 'inactive'}`}
        >
          <p>thilak</p>
          <p>thangam</p>
        </div>
      </div>
      <div className="check-box-div">
        <label>
          <input type="checkbox" className="check-box" />
          Send me helpful emails.
          <span></span>
        </label>
        <label><input type="checkbox" className='check-box'/>
        Yes, I understand and agree to the <a href="">LegalPulse Terms of Service</a>, including the <a href="">Using Agreement</a> and <a href="">Privacy Policy</a></label>
      </div>
      <div className="create-btn"><button>Create my account</button></div>
      <div className="alter"><p>Already have an account? <a href="">Log in</a></p></div>
    </div>
  )
}

export default Main
