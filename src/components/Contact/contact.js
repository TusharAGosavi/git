import React, { useRef } from 'react';
import './contact.css';
import InstaIcon from '../../assets/instagram.png'
import facebookIcon from '../../assets/facebook-icon.png'
import twitterIcon from '../../assets/twitter.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

    
        emailjs.sendForm('service_i1ty77o', 'template_u2gi51c', form.current, 'p68D8k31e1sMj1K5O')
          .then((result) => {
              console.log(result.text);
              alert('Email Sent !');
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
    };
    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactMe'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name='your_name' />
                    <input type="email" className='email' placeholder='Your email' name='your_email'/>
                    <textarea name="message" rows="5" className='msg' placeholder='Your message'/>
                    <button className='submitBtn' type='submit' value='Send'>Submit</button>
                    <div className='links'>
                        <img src={InstaIcon} alt='' className='link'/>
                        <img src={facebookIcon} alt='' className='link'/>
                        <img src={twitterIcon} alt='' className='link'/>
                        
                        
                    </div>


                </form>
                

            </div>
        </section>
    )
}

export default Contact;