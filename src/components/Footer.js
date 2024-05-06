import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    // <footer id="footer">
    //   <h2>Contact Us</h2>
    //   <p>Email: icecream@example.com</p>
    //   <p>Phone: 123-456-7890</p>
    // </footer>
    <footer id='footer'>
    <h2>Contact Us</h2>
    <p>If you have any questions or inquiries, feel free to get in touch with us!</p>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your name" required />
      <br/><br/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Your email" required />
      <br/>
      <br/>
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" placeholder="Your message" rows="6" required></textarea>
      <br/><br/>
      <button type="submit">Send Message</button>
      
    </form>
  </footer>
  );
}

export default Footer;
