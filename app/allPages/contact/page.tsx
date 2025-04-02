"use client";
import NavbarLayout from "@/component/navlayout/navlayout";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <NavbarLayout>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-3 md:gapp-3  p-6">
        {/* Input section */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
          >
            <h1 className="text-2xl font-bold mb-4">Let&apos;s connect</h1>
            <p className="text-gray-600 mb-4">
              Feel free to contact me anytime. I will get back to you as soon as
              I can!
            </p>

            {/* Name Input */}
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="border-b outline-none  bg-transparent focus:border-blue-500 w-full p-2 mb-4"
              required
              value={formData.name}
              onChange={handleChange}
            />

            {/* Email Input */}
            <label className="block mb-2 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border-b outline-none  bg-transparent focus:border-blue-500 w-full p-2 mb-4"
              required
              value={formData.email}
              onChange={handleChange}
            />

            {/* Number Input */}
            <label className="block mb-2 font-medium">Your Number</label>
            <input
              type="text"
              name="number"
              placeholder="Enter your mobile number"
              className="border-b outline-none  bg-transparent focus:border-blue-500 w-full p-2 mb-4"
              value={formData.number}
              onChange={handleChange}
            />

            {/* Message Input */}
            <label className="block mb-2 font-medium">Your Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows={4}
              className="border-b outline-none bg-transparent focus:border-blue-500 w-full p-2 mb-4"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-gray-600"
            >
              Send Message
            </button>
            {status && (
              <p className="mt-4 text-center text-gray-600">{status}</p>
            )}
          </form>
        </div>
        {/* INfo Section */}
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Info</h1>

          {/* Email */}
          <div className="flex items-center gap-2">
            <MdEmail className="text-blue-500 w-6 h-6" />
            <p className="text-xl">dksinha0701@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 mt-2">
            <MdPhone className="text-green-500 w-6 h-6" />
            <p className="text-xl">1174295002298462231</p>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 mt-2">
            <MdLocationOn className="text-red-500 w-6 h-6" />
            <p className="text-xl">SunPlaza, Barasat, Kolkata WB</p>
          </div>

          {/* Working Hours */}
          <div className="flex items-center gap-2 mt-2">
            <MdAccessTime className="text-yellow-500 w-6 h-6" />
            <p className="text-xl">09:00 - 18:00</p>
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
}
