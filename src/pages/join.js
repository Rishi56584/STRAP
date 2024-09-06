import React, { useState } from 'react';
import './join.css';

const JoinUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/joinus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Form submitted successfully');
            } else {
                alert('Failed to submit form');
            }
        } catch (error) {
            alert('Error submitting form');
        }
    };

    return (
        <div className="container">
            <h1>Join Us for Animal Protection</h1>
            <p>Fill out the form below to join our community and contribute to animal welfare.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <label htmlFor="message">Why do you want to join?</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Join Us</button>
            </form>
        </div>
    );
};

export default JoinUsForm;
