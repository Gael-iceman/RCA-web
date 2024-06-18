import React from 'react'
import { useRef } from 'react';
import './testimonials.css'
import nextarrow from '../../assets/next-arrow.png'
import backarrow from '../../assets/back-arrow.png'
import user from '../../assets/hash.jpg'

function Testimonials() {

const slideerr=useRef();
let tx=0;

const slideeForward=()=>{
   if(tx>-50){
    tx -=25;
   } 
   slideerr.current.style.transform=`translateX(${tx}%)`
}
 
const slideeBackward=()=>{
    if(tx < 0){
        tx +=25;
       } 
       slideerr.current.style.transform=`translateX(${tx}%)`
}

  return (
    <div className='testimonials'>
      <img src={nextarrow} alt="" className='next-btnn'  onClick={slideeForward} />  
      <img src={backarrow} alt="" className='back-btnn'  onClick={slideeBackward} /> 
      <div className="slideerr">
        <ul ref={slideerr}>
            <li>
                <div className="slidee">
                    <div className="user-infoo">
                        <img src={user} alt="" />
                       <div>
                        <h3>ICEMAN</h3>
                       </div>
                    </div>
                    <p>gcvhljknbjghctyfugihojkbvhgcfxdr <br /> tyuihjbfgdtyugihjbvfgxrtsdyugihkjbmnf
                      
                    </p>
                </div>
            </li>
            <li>
                <div className="slidee">
                    <div className="user-infoo">
                        <img src={user} alt="" />
                       <div>
                        <h3>ICEMAN2</h3>
                       </div>
                    </div>
                    <p>gcvhljknbjghctyfugihojkbvhgcfxdr <br /> tyuihjbfgdtyugihjbvfgxrtsdyugihkjbmnf
               
                    </p>
                </div>
            </li>
            <li>
                <div className="slidee">
                    <div className="user-infoo">
                        <img src={user} alt="" />
                       <div>
                        <h3>ICEMAN3</h3>
                       </div>
                    </div>
                    <p>gcvhljknbjghctyfugihojkbvhgcfxdrt  <br /> yuihjbfgdtyugihjbvfgxrtsdyugihkjbmnf
         
                    </p>
                </div>
            </li>
            <li>
                <div className="slidee">
                    <div className="user-infoo">
                        <img src={user} alt="" />
                       <div>
                        <h3>ICEMAN4</h3>
                       </div>
                    </div>
                    <p>gcvhljknbjghctyfugihojkbvhg  <br /> cfxdrtyuihjbfgdtyugihjbvfgxrtsdyugihkjbmnf
            
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
