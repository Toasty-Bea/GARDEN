import React from 'react';
import Untitled from '../assets/image/USED/Background/K02.jpg';
import "../styles/Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="leftSideA"
                style={{ backgroundImage: `url(${Untitled})` }}
                ></div>
            <div className="rightSideB">
                <h1>contact us</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name" >Full Name</label>
                    <input name="name" placeholder="Enter Full Name..." type="text" />
                    <label htmlFor="email" >Email</label>
                    <input name="email" placeholder="Enter Email..." type="email" />
                    <label htmlFor="message" >message</label>
                    <textarea
                        rows={6}
                        placeholder="Enter message..."
                        name="message"
                        required></textarea>
                    <button type="submit"> Send Message</button>

                </form>

            </div>
            
        </div>
    );
};

export default Contact;