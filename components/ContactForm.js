'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    time: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    'w-full border border-[#ccc] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#009da3] text-[#213650] bg-white';

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    if (!form.time.trim()) newErrors.time = 'Preferred time is required.';
    if (!form.consent) newErrors.consent = 'You must agree before submitting.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true); 
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#213650] text-center">
          Contact Me
        </h2>

        {/* If submitted, show confirmation */}
        {submitted ? (
          <div className="flex flex-col items-center text-center gap-4 p-6 border border-[#009da3] rounded-md bg-[#dee9de]">
            <svg
              className="w-12 h-12 text-[#009da3]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-[#213650]">
              Your form has been submitted!
            </h3>
            <p className="text-[#523c00]">
              Thank you for reaching out. I’ll get back to you as soon as possible!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="What brings you here?"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            {/* Preferred time */}
            <div>
              <input
                type="text"
                name="time"
                placeholder="Preferred time to reach you"
                value={form.time}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.time && <p className="text-sm text-red-500 mt-1">{errors.time}</p>}
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="mt-1 accent-[#009da3]"
              />
              <label className="text-sm text-[#213650]">
               By checking this box, I consent to receive communication related to my inquiry. I understand my information will be handled in accordance with the privacy policy and will not be shared without my consent.

              </label>
            </div>
            {errors.consent && <p className="text-sm text-red-500">{errors.consent}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-14 rounded-md border-2 border-[#009da3] text-[#008186] font-semibold flex items-center justify-center py-4 px-6 hover:bg-[#009da3] hover:text-white transition-all duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
