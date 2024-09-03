import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../context";

export default function Meet() {
  const { authUser } = useContext(AppContext);

  // State to handle form inputs
  const [startTime, setStartTime] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [meetingTopic, setMeetingTopic] = useState("");
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get("/api/meet/get");
        setMeetings(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeetings();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data to be sent to the server
    const meetingData = {
      startTime,
      meetingLink,
      meetingTopic,
      userID: authUser._id,
    };

    try {
      // Sending POST request to the server
      const response = await axios.post("/api/meet/add", meetingData);
      console.log("Meeting scheduled successfully:", response.data);

      // Optionally, you can clear the form or show a success message
      window.location.reload();
      setStartTime("");
      setMeetingLink("");
      setMeetingTopic("");
    } catch (error) {
      console.error("There was an error scheduling the meeting:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto p-6 sm:p-10 gap-6">
        {authUser.userType !== "user" && (
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
              Schedule a Meeting
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="start-time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Time
                </label>
                <div className="relative mt-2">
                  <input
                    id="start-time"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full p-3 text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="meeting-link"
                  className="block text-sm font-medium text-gray-700"
                >
                  Meeting Link
                </label>
                <input
                  id="meeting-link"
                  type="url"
                  value={meetingLink}
                  onChange={(e) => setMeetingLink(e.target.value)}
                  placeholder="https://example.com/meeting"
                  className="mt-2 w-full p-3 text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="meeting-topic"
                  className="block text-sm font-medium text-gray-700"
                >
                  Meeting Topic
                </label>
                <input
                  id="meeting-topic"
                  type="text"
                  value={meetingTopic}
                  onChange={(e) => setMeetingTopic(e.target.value)}
                  placeholder="Enter a meeting topic"
                  className="mt-2 w-full p-3 text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Schedule Meeting
              </button>
            </form>
          </div>
        )}

        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Scheduled Meetings
          </h2>
          {meetings.length === 0 ? (
            <p className="text-gray-600">
              No meetings scheduled in the last 12 hours.
            </p>
          ) : (
            <ul className=" grid grid-cols-1 gap-4">
              {meetings.map((meeting) => (
                <li
                  key={meeting._id}
                  className="p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {meeting.meetingTopic}
                  </h3>
                  <p className="text-gray-700">
                    <strong>Start Time:</strong> {meeting.startTime}
                  </p>
                  <p className="text-gray-700">
                    <strong>Meeting Link:</strong>{" "}
                    <a href={meeting.meetingLink} className="text-blue-600">
                      {meeting.meetingLink}
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Scheduled By:</strong>{" "}
                    {meeting.UID ? meeting.UID.name : "Unknown User"}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
