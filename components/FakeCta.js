// components/CTA.js
"use client"

import { useState } from 'react';

export default function FakeCta() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Tutto ok');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Email sent successfully!');
        setEmail('');
      } else {
        setMessage('Failed to send email. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p className='p-10 h-32'>{message}</p>
    </div>
  );
}