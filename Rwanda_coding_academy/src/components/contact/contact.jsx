import React from 'react'
import './contact.css'
import message_icon from '../../assets/mail.png'
import email_icon from '../../assets/maill.png'
import contactt_icon from '../../assets/receiver.png'
import address_icon from '../../assets/location.png'

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b341b6bb-0229-48e4-b52b-766986311c48");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contactt'>
      <div className="contactt-col">
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti placeat fugit itaque  
            neque illum cumque dicta voluptatum veritatis.</p>
             <ul>
                <li className='address'><img src={email_icon} alt="" /><b>Email</b>: info@rca.ac.rw</li>
                <li className='phone'><img src={contactt_icon} alt="" /><b>Phone number</b>: ( +250)788-548-000</li>
                <li className='address'><img src={address_icon } alt="" /><b>Address </b>: Musanze, Mukamira Sector</li>
             </ul>
      </div>
      <div className="contactt-col">
        <form onSubmit={onSubmit}>
            <label>Your name:</label>
            <input type="text" name='name' placeholder='enter your name' required/>
            <label>Phone number:</label>
            <input type="tel" name='phone' placeholder='enter your mobile number' required />
            <label>Write your message here:</label>
            <textarea name='message' id='' rows="6"  placeholder='enter your message' required/>
            <button type='submit' className='btnn darkk-btnn'>Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
