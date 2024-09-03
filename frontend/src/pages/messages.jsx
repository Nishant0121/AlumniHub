import { useParams } from "react-router-dom";
import { AppContext } from "../context";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Send } from "lucide-react";

export default function Messages() {
  const { receiverID } = useParams(); // Corrected from reciverID to receiverID
  const { authUser } = useContext(AppContext);
  const [messages, setMessages] = useState([]);
  const senderId = authUser._id;
  const messagesEndRef = useRef(null); // Create a ref for the messages container

  const [user, setUser] = useState({});

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.post("/api/connect/get/message", {
          receiverID,
          senderId,
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [receiverID, senderId]);

  useEffect(() => {
    scrollToBottom(); // Scroll to the bottom whenever messages are updated
  }, [messages]);

  useEffect(() => {
    // Fetch user details
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/users/get/user/${receiverID}`
        );
        setUser(response.data); // Set the user state with the response data
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, [receiverID]);

  const handleSend = async (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    event.target.message.value = "";

    try {
      const response = await axios.post("/api/connect/send/message", {
        senderId,
        receiverID,
        message,
      });
      setMessages((prevMessages) => [...prevMessages, response.data]);
      window.location.reload(); // Update messages array with the new message
      scrollToBottom(); // Scroll to the bottom after sending a message
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col h-[90vh] rounded-md border shadow-md scroll-container">
      <header className=" shadow-md mt-1 py-2 px-6 flex rounded-md items-center justify-between">
        <h1 className="text-xl font-bold text-vlack">{user.name}</h1>
      </header>
      <div className="flex-1 overflow-auto p-6 scroll-container">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`flex ${
                msg.senderId === senderId ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-xs ${
                  msg.senderId === senderId
                    ? "bg-primary text-primary-foreground"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                <p>{msg.message}</p>
                <span className="text-xs text-gray-500">
                  {new Date(msg.sentAt).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />{" "}
          {/* This is the empty div to scroll into view */}
        </div>
      </div>
      <form
        onSubmit={handleSend}
        className="bg-background text-white border-t px-2 py-2 flex items-center gap-1 md:gap-4"
      >
        <textarea
          name="message"
          placeholder="Type your message..."
          className="flex-1 min-h-[40px] rounded-lg p-1 bg-gray-800 text-white"
        />
        <button className="rounded-full p-2 bg-black" type="button" size="icon">
          <MicIcon className="w-5 h-5" />
          <span className="sr-only">Record voice message</span>
        </button>
        <button
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-2 py-2 rounded-lg"
          type="submit"
        >
          <Send />
        </button>
      </form>
    </div>
  );
}

function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}
