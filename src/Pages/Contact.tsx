import { useState } from 'react';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!formData.email.includes("@") || !formData.email.includes(".")) newErrors.email = 'Invalid email';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setSubmitted(true);
      } catch (err) {
        console.error('Form submit error:', err);
      }
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      {submitted ? (
        <p className="text-green-600">Thanks for contacting us!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label className="block">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block">Message</label>
            <textarea
              className="w-full border p-2 rounded"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
