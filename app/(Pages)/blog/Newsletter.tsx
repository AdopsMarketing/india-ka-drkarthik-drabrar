import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    // Simulate API call
    setTimeout(() => {
      setMessage('Thank you for subscribing!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="flex w-full justify-center items-center bg-[#1A4CA3] py-16 px-4 md:px-8">
      <div className="w-full max-w-4xl bg-[#317CFF] px-8 py-10 rounded-2xl flex flex-col items-center text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-6 font-poppins">
          Get new articles, videos & rehab tips straight to your inbox
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 w-full max-w-2xl"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg bg-white text-[#726E6E] font-semibold font-montserrat placeholder:text-[#726E6E] border-none outline-none disabled:opacity-50"
            disabled={isSubmitting}
            aria-label="Email address"
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-[#1A4CA3] text-white text-lg font-semibold rounded-lg font-montserrat hover:bg-[#0f3a8a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-sm ${message.includes('Thank you') ? 'text-green-200' : 'text-red-200'}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
