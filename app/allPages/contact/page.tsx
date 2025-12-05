"use client";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", number: " ", message: "" });
    } else {
      setStatus("Failed to send message. Try again leter.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-4 md:gap-6 lg:gap-8 bg-[#edeef1] p-4 sm:p-6 lg:p-10 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#6A5ACD] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#6A5ACD] opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Form Section */}
      <div className="relative z-10 w-full max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-gray-200 hover:border-[#6A5ACD] transition-all duration-300"
        >
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#6A5ACD] border-b-4 border-[#6A5ACD] inline-block pb-2 mb-3">
              Let&apos;s connect
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Feel free to contact me anytime. I will get back to you as soon as I
              can!
            </p>
          </div>

          {/* Name Input */}
          <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border-b-2 border-gray-300 outline-none bg-transparent focus:border-[#6A5ACD] w-full p-2 mb-5 transition-colors duration-300 text-gray-800"
            required
            value={formData.name}
            onChange={handleChange}
          />

          {/* Email Input */}
          <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border-b-2 border-gray-300 outline-none bg-transparent focus:border-[#6A5ACD] w-full p-2 mb-5 transition-colors duration-300 text-gray-800"
            required
            value={formData.email}
            onChange={handleChange}
          />

          {/* Number Input */}
          <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">Your Number</label>
          <input
            type="text"
            name="number"
            placeholder="Enter your mobile number"
            className="border-b-2 border-gray-300 outline-none bg-transparent focus:border-[#6A5ACD] w-full p-2 mb-5 transition-colors duration-300 text-gray-800"
            value={formData.number}
            onChange={handleChange}
          />

          {/* Message Input */}
          <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">Your Message</label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            rows={4}
            className="border-b-2 border-gray-300 outline-none bg-transparent focus:border-[#6A5ACD] w-full p-2 mb-5 transition-colors duration-300 resize-none text-gray-800"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#6A5ACD] text-white py-3 rounded-full font-semibold hover:bg-[#5a4abd] shadow-lg hover:shadow-xl hover:shadow-[#6A5ACD]/30 transition-all duration-300 hover:scale-105 transform"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-4 text-center text-gray-700 font-medium">{status}</p>
          )}
        </form>
      </div>

      {/* Info Section */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-gray-200 hover:border-[#6A5ACD] transition-all duration-300">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6A5ACD]">Info</h1>

          {/* Email */}
          <div className="flex items-center gap-3 mb-5 group">
            <div className="bg-[#edeef1] p-3 rounded-full group-hover:bg-[#6A5ACD] transition-all duration-300">
              <MdEmail className="text-[#6A5ACD] group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300" />
            </div>
            <p className="text-base sm:text-lg text-gray-700 break-all">dksinha0701@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 mb-5 group">
            <div className="bg-[#edeef1] p-3 rounded-full group-hover:bg-[#6A5ACD] transition-all duration-300">
              <MdPhone className="text-[#6A5ACD] group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300" />
            </div>
            <p className="text-base sm:text-lg text-gray-700 break-all">N/A</p>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 mb-5 group">
            <div className="bg-[#edeef1] p-3 rounded-full group-hover:bg-[#6A5ACD] transition-all duration-300">
              <MdLocationOn className="text-[#6A5ACD] group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300" />
            </div>
            <p className="text-base sm:text-lg text-gray-700">SunPlaza, Barasat, Kolkata WB</p>
          </div>

          {/* Working Hours */}
          <div className="flex items-center gap-3 group">
            <div className="bg-[#edeef1] p-3 rounded-full group-hover:bg-[#6A5ACD] transition-all duration-300">
              <MdAccessTime className="text-[#6A5ACD] group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300" />
            </div>
            <p className="text-base sm:text-lg text-gray-700">09:00 - 18:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
