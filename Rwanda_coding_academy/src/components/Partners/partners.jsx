import React from 'react'
import './partners.css'
import samsung from '../../assets/samsung.jpg'
import koica from '../../assets/koica.jpg'
import bank from '../../assets/bank.jpg'

function Partners() {
  return (
    <div className='partners'>
      <div className="partner">
        <img src={bank} alt="" />
        <div className='captionn'><p>WORLD BANK</p></div>
        </div>

        <div className="partner">
        <img src={samsung} alt="" />
        <div className='captionn'><p>SAMSUNG</p></div>
        </div>

        <div className="partner">
        <img src={koica} alt="" />
        <div className='captionn'><p>KOICA</p></div>
      </div>
    </div>
  )
}

export default Partners
