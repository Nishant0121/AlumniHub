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
    // Refined prompt to guide AI's response to be specific to technical education and studies
    const refinedPrompt = `You are the help desk assistant of our alumni student portal.Our platform connects students with experienced alumni from the Technical Education Department of Rajasthan. You can access a rich database of alumni for networking, mentorship, and career guidance. Engage in discussion forums, join mentorship programs, and participate in career-focused events like webinars and panel discussions. Leverage advanced features like AI-driven recommendations to find relevant connections and ensure a secure, supportive environment. Start building valuable connections and gaining insights today!.Keep your word length till 50 words. Answer to the point and help the user navigate through our app. Only answer questions related to technical education and studies: ${prompt}`;

    try {
      // Add user message to chat history
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "user", text: prompt },
      ]);
      setLoading(true);

      // Request response from the AI model
      const result = await model.generateContent(refinedPrompt);
      const response = await result.response;
      const text = await response.text();

      // Post-process the response to ensure it is within the desired scope and word limit
      const filteredText = filterResponse(text);
      const truncatedText = truncateResponse(filteredText, 50);

      // Update chat history with the AI's response
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "ai", text: truncatedText },
      ]);
    } catch (error) {
      console.error("Error generating AI response:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to filter response to be relevant to technical education and studies
  const filterResponse = (text) => {
    // Example filter logic: you might want to implement more sophisticated filtering based on your needs
    const keywords = [
      "technical",
      "education",
      "study",
      "engineering",
      "science",
      "technology",
      "computer",
      "programming",
      "mechanical",
      "electrical",
      "civil",
      "chemical",
      "aerospace",
      "structural",
      "biomedical",
      "environmental",
      "industrial",
      "systems",
      "robotics",
      "software",
      "design",
      "analysis",
      "simulation",
      "prototyping",
      "CAD",
      "CAM",
      "thermodynamics",
      "fluid mechanics",
      "circuit design",
      "control systems",
      "materials science",
      "manufacturing",
      "optimization",
      "data analysis",
      "machine learning",
      "artificial intelligence",
      "signal processing",
      "embedded systems",
      "network engineering",
      "cybersecurity",
      "database management",
      "systems integration",
      "project management",
      "modeling",
      "testing",
      "calibration",
      "maintenance",
      "quality assurance",
      "reliability engineering",
      "safety engineering",
      "systems engineering",
      "ergonomics",
      "sustainability",
      "lean manufacturing",
      "six sigma",
      "agile development",
      "troubleshooting",
      "Python",
      "MATLAB",
      "C++",
      "Java",
      "JavaScript",
      "SQL",
      "R",
      "Simulink",
      "LabVIEW",
      "Git",
      "Docker",
      "Kubernetes",
      "web",
      "app",
    ];

    const containsKeyword = keywords.some((keyword) =>
      text.toLowerCase().includes(keyword)
    );
    return containsKeyword
      ? text
      : "Response does not meet the criteria for technical education and studies.";
  };

  // Helper function to truncate response to a specified word limit
  const truncateResponse = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
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
