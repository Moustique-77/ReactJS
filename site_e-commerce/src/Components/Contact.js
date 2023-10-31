import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
    return (
        <div className="container mt-5">
            <Navbar />
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, please feel free to reach out using the form below:</p>
            
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" className="form-control" id="subject" placeholder="Enter the subject" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Footer />
        </div>
    );
}

export default Contact;
