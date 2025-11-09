import React, { useState } from "react";
import TiltCard from './TiltCard';

function Mailform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setShowMessage(false);

    const formDataWithKey = new FormData();
    Object.keys(formData).forEach(key => {
      formDataWithKey.append(key, formData[key]);
    });
    formDataWithKey.append("access_key", "5fa79ee5-e9e9-4124-81ee-02eca8935cda");

    const object = Object.fromEntries(formDataWithKey);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setMessage("Message sent successfully! Thank you for reaching out.");
        setMessageType("success");
        clearForm();
      } else {
        setMessage("Failed to send message. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
      setShowMessage(true);

      // Hide message after 5 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  };

  return (
    <TiltCard>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 transform transition duration-500 hover:border-indigo-500 hover:shadow-xl">
        <form onSubmit={onSubmit} className="space-y-6">
          {showMessage && (
            <div className={`p-4 rounded-md ${messageType === "success"
              ? "bg-green-900/50 border border-green-700 text-green-300 animate-glow"
              : "bg-red-900/50 border border-red-700 text-red-300 animate-glow"
              }`}>
              <p className="text-sm font-medium">{message}</p>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-700 rounded-lg shadow-sm bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-700 rounded-lg shadow-sm bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-700 rounded-lg shadow-sm bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition duration-300 transform hover:scale-105 ${isLoading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate-gradient"
              }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </TiltCard>
  );
}

export default Mailform;