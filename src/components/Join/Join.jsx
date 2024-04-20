import {useRef} from 'react'
import "./join.css"
import emailjs from "@emailjs/browser"
const Join = () => {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_inkrxae', 'template_eux9a4l', form.current, {
            publicKey: 'ONCdJ-AhPCMLrhkS7',
            })
            .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };
  return (
    <div className='join'>
        <div className='left-j'>
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span className='stroke-text'>YOUR BODY</span>
                <span>WITH US?</span>
            </div>
        </div>
        <div className='right-j'>
            <form  ref={form} onSubmit={sendEmail} className='email-container'>
                <input type="email" name="user_email" placeholder="Enter your Email address"></input>
                <button className='btn btn-j' style={{backgroundColor:"orange"}}>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join