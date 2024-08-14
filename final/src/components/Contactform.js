import React, { useState } from 'react';
import './../styles/Contactform.css';

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
        <div className="container text-center mt-5">
            <h1 className="text-pink">We are all ears (and taste buds)!!</h1>
            <h2 className="mb-4">Have a question? Let our wine experts uncork the answer</h2>
            
            <div className="form-container p-4 bg-white rounded shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="text-dark-red">Your Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            placeholder="Your Name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                        {validationMessages.name && <div className="text-danger">{validationMessages.name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="text-dark-red">Your Email-id</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            placeholder="Your Email-Id" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                        {validationMessages.email && <div className="text-danger">{validationMessages.email}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="query" className="text-dark-red">Your Query</label>
                        <textarea 
                            className="form-control" 
                            id="query" 
                            name="query" 
                            placeholder="Your Query" 
                            value={formData.query}
                            onChange={handleChange}
                            required 
                        ></textarea>
                        {validationMessages.query && <div className="text-danger">{validationMessages.query}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;