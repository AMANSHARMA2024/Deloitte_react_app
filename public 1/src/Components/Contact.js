import React, { useState } from 'react';
import contactstyle from './../styles/Contact.module.css';
 
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: ''
    });
 
    const [validationMessages, setValidationMessages] = useState({
        name: '',
        email: '',
        query: ''
    });
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
 
    const validateForm = () => {
        let isValid = true;
        const messages = {
            name: '',
            email: '',
            query: ''
        };
 
        if (!formData.name) {
            messages.name = 'Name is required.';
            isValid = false;
        }
 
        if (!formData.email) {
            messages.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            messages.email = 'Email must be a valid email address.';
            isValid = false;
        }
 
        if (!formData.query) {
            messages.query = 'Query is required.';
            isValid = false;
        } else if (formData.query.length > 1500) {
            messages.query = 'Query must be less than 1500 characters.';
            isValid = false;
        }
 
        setValidationMessages(messages);
        return isValid;
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission logic here
            console.log('Form submitted:', formData);
        }
    };
 
    return (
        <div className={`${contactstyle.body} container mt-5`}>
            <h1 className={contactstyle.textPink}>We are all ears (and <b style={{color: '#b5545e', fontWeight: 'bold'}}>TASTE BUDS</b>)!!</h1>
            <div className='design'>
            <h2 className={`${contactstyle.mb4} mb-4`}>Have a question? Let our wine experts uncork the answer</h2>
           
            <div className={`${contactstyle.formContainer} form-container`}>
                <form onSubmit={handleSubmit}>
                    <div className={`${contactstyle.formGroup} form-group`}>
                        <label htmlFor="name" className={contactstyle.textDarkRed}>Your Name</label>
                        <input
                            type="text"
                            className={`${contactstyle.formControl} form-control`}
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {validationMessages.name && <div className="text-danger">{validationMessages.name}</div>}
                    </div>
                    <div className={`${contactstyle.formGroup} form-group`}>
                        <label htmlFor="email" className={contactstyle.textDarkRed}>Your Email-id</label>
                        <input
                            type="email"
                            className={`${contactstyle.formControl} form-control`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {validationMessages.email && <div className="text-danger">{validationMessages.email}</div>}
                    </div>
                    <div className={`${contactstyle.formGroup} form-group`}>
                        <label htmlFor="query" className={contactstyle.textDarkRed}>Your Query</label>
                        <textarea
                            className={`${contactstyle.formControl} form-control`}
                            id="query"
                            name="query"
                            style={{height: '200px'}}
                            value={formData.query}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {validationMessages.query && <div className="text-danger">{validationMessages.query}</div>}
                    </div>
                    <button type="submit" className={`${contactstyle.btnPrimary}`}>Submit</button>
                </form>
            </div></div>
        </div>
    );
};
 
export default Contact;
 