import axios from "axios";
import { Monitor, SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Notification() {
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

  return (
    <div className=" h-100vh overflow-y-auto scroll-container scroll-smooth">
      <div role="alert" className="rounded-xl  flex flex-col ">
        {meetings.length === 0 ? (
          <p className="text-gray-700">No new notifications.</p>
        ) : (
          meetings.map((meeting) => (
            <div
              key={meeting._id}
              className="flex items-start gap-4 mb-4 bg-white hover:bg-indigo-100 p-2 rounded-lg"
            >
              <Monitor className="mt-1 h-6 w-6 shrink-0 text-indigo-600" />

              <div className="flex-1">
                <strong className="block font-medium text-gray-900">
                  {meeting.meetingTopic}
                </strong>

                <p className="mt-1 text-sm text-gray-700">
                  Scheduled by: {meeting.UID ? meeting.UID.name : "Unknown"}
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  Start Time: {meeting.startTime}
                </p>

                <div className="mt-4 flex gap-2">
                  <a
                    href={meeting.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                  >
                    <span className="text-sm"> Visit </span>
                    <SquareArrowOutUpRight className="h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
