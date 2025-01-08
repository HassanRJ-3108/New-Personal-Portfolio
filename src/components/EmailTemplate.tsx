import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>You have received a new message from your website contact form.</p>
    <h2>Contact Details:</h2>
    <ul>
      <li>Name: {name}</li>
      <li>Email: {email}</li>
    </ul>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);

