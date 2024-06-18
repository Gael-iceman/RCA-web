import React from 'react'
import './Programms.css'
import cyber from '../../assets/cyber_security.jpg'
import embedded from '../../assets/embedded.jpg'
import programming from '../../assets/programming.jpg'
import software from '../../assets/software.jpg'

function Programms() {
  return (
    <div className='programs'>
      <div className="program">
        <img src={cyber} alt="" />
        <div className="caption">
          <p>Cyber security</p>
        </div>
      </div>
      <div className="program">
        <img src={embedded} alt="" />
        <div className="caption">
          <p>Embedded</p>
          <p>system</p>
        </div>
      </div>
      <div className="program">
        <img src={programming} alt="" />
        <div className="caption">
          <p>Programming</p>
        </div>
      </div>
      <div className="program">
        <img src={software} alt="" />
        <div className="caption">
          <p>Software</p>
          <p> development</p>
        </div>
      </div>
    </div>
  )
}

export default Programms
