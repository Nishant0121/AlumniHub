import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Bot, Send } from "lucide-react";

export default function ChatBot() {
  const API_KEY = "AIzaSyBxm7zzP55l_Aoqgb3I7LF-YJDURFApzrw";
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const run = async (prompt) => {
    try {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "user", text: prompt },
      ]);
      setLoading(true);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      // Update chat history with user's input and the AI's response
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "ai", text: text },
      ]);
      setLoading(false);
    } catch (error) {
      console.error("Error generating AI response:", error);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      run(userInput);
      setUserInput(""); // Clear input field after submission
    }
  };

  return (
    <div className="modal-box p-2 sm:p-4 bg-white min-h-[100vh] min-w-[100vw] sm:min-h-[80vh] sm:min-w-[80vw]">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-bold text-lg">Chat with AI</h3>
      <div className="chat-box h-[80vh] sm:h-[60vh] overflow-y-auto scroll-container p-2">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`chat ${
              message.sender === "user" ? "chat-end" : "chat-start"
            }`}
          >
            {" "}
            {message.sender === "user" ? (
              ""
            ) : (
              <div className="chat-image avatar">
                <div className="w-6 rounded-full">
                  <Bot />
                </div>
              </div>
            )}
            <p
              className={`${
                message.sender === "user"
                  ? " bg-indigo-100 text-black"
                  : "bg-gray-100 text-gray-900"
              } chat-bubble`}
            >
              {message.text}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleOnSubmit} className="mt-4 flex items-center">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="input input-bordered bg-indigo-600 w-full text-white"
        />
        <button
          type="submit"
          className={`btn ml-2 ${loading ? " -z-0" : " -z-0"} text-white`}
        >
          {loading ? (
            <span className="loading loading-bars loading-md"></span>
          ) : (
            <Send />
          )}
        </button>
      </form>
    </div>
  );
}
