import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="container-custom py-10">
        <div className="text-sm text-gray-400 flex items-center gap-2">
          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-black font-medium">Contact</span>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="container-custom pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ──────── Left Info Card (4 cols) ──────── */}
          <div className="lg:col-span-4 bg-white shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded px-8 py-10">
            {/* Call To Us */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DB4444] text-white flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <h3 className="text-base font-medium text-black">Call To Us</h3>
              </div>
              <p className="text-sm text-black font-normal leading-relaxed">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm text-black font-normal">
                Phone: +8801611112222
              </p>
            </div>

            {/* Divider */}
            <hr className="my-8 border-gray-300" />

            {/* Write To Us */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#DB4444] text-white flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <h3 className="text-base font-medium text-black">Write To Us</h3>
              </div>
              <p className="text-sm text-black font-normal leading-relaxed">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm text-black font-normal">
                Emails: customer@exclusive.com
              </p>
              <p className="text-sm text-black font-normal">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>

          {/* ──────── Right Form Card (8 cols) ──────── */}
          <div className="lg:col-span-8 bg-white shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Top 3 Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] rounded px-4 py-3.5 text-sm text-black placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[#DB4444] transition-all"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] rounded px-4 py-3.5 text-sm text-black placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[#DB4444] transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] rounded px-4 py-3.5 text-sm text-black placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[#DB4444] transition-all"
                />
              </div>

              {/* Message Textarea */}
              <textarea
                name="message"
                required
                rows={7}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#F5F5F5] rounded p-4 text-sm text-black placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[#DB4444] transition-all resize-none"
              />

              {/* Send Button */}
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white px-10 py-3.5 rounded font-medium text-sm hover:bg-[#c93939] transition-colors"
                >
                  Send Massage
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;