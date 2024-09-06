import React, { useState } from 'react';
import './donate.css';

export default function Donate() {
    const [formData, setFormData] = useState({
        amount: '1k rupees',
        name: '',
        phone: '',
        email: '',
        city: ''
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
            const response = await fetch('http://localhost:5000/donate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Donation submitted successfully');
            } else {
                alert('Failed to submit donation');
            }
        } catch (error) {
            alert('Error submitting donation');
        }
    };

    return (
        <div className='form-main'>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="donate">DONATE US</label>
                    <select name="amount" id="donate" value={formData.amount} onChange={handleChange}>
                        <option value="1k rupees">1k rupees</option>
                        <option value="5k rupees">5k rupees</option>
                        <option value="10k rupees">10k rupees</option>
                    </select>
                    <div className="pk">NAME:
                        <input type="text" name="name" placeholder="FIRSTNAME" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="pk">PHONE:
                        <input type="text" name="phone" placeholder="ENTER YOUR NUMBER" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="pk">MAIL:
                        <input type="text" name="email" placeholder="MAIL" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="pk">CITY:
                        <input type="text" name="city" placeholder="YOUR PLACE" value={formData.city} onChange={handleChange} />
                    </div>
                    <input type="submit" value="PAY NOW" />
                </form>
            </div>
        </div>
    );
}
