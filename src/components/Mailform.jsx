import React, { useState } from "react";

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
    <form onSubmit={onSubmit} className="space-y-6">
      {showMessage && (
        <div className={`p-4 rounded-md ${
          messageType === "success" 
            ? "bg-green-50 border border-green-200 text-green-800" 
            : "bg-red-50 border border-red-200 text-red-800"
        }`}>
          <p className="text-sm font-medium">{message}</p>
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black">
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black">
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black">
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          isLoading 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }`}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default Mailform;
