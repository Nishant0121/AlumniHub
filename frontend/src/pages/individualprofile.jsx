import axios from "axios";
import {
  CalendarIcon,
  LocateIcon,
  MailIcon,
  PhoneIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  TrophyIcon,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AppContext } from "../context";

export default function IndividualProfile() {
  const { userID } = useParams();
  const { authUser } = useContext(AppContext);
  const navigate = useNavigate(); // Corrected to useNavigate hook
  const [user, setUser] = useState(null); // Initialize as null to check for loading state

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Fetch user details
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/users/get/user/${userID}`
        );
        setUser(response.data); // Set the user state with the response data
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, [userID]);

  const handleConnect = async () => {
    try {
      await axios.post("http://localhost:4000/api/users/add/connection", {
        U1ID: userID,
        U2ID: authUser._id,
      });
      navigate("/myconnections");
    } catch (error) {
      console.error("Error adding connection:", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
          <p className="text-gray-600">{user.institution}</p>
          {user.company && <p className="text-gray-600">{user.company}</p>}
        </div>
      </header>
      <div>
        <h2 className="text-xl font-semibold mb-4">Basic Details</h2>
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <MailIcon className="w-5 h-5 text-gray-500" />
            <p>{user.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-gray-500" />
            <p>{user.mobile}</p>
          </div>
          {user.degree && (
            <div className="flex items-center gap-2">
              <GraduationCapIcon className="w-5 h-5 text-gray-500" />
              <p>{user.degree}</p>
            </div>
          )}
          {user.yearOfGraduation && (
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-gray-500" />
              <p>Class of {user.yearOfGraduation}</p>
            </div>
          )}
          {user.careerPath && (
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="w-5 h-5 text-gray-500" />
              <p>{user.careerPath}</p>
            </div>
          )}
          {user.socialAccounts && (
            <div className="flex items-center gap-2">
              <LocateIcon className="w-5 h-5 text-gray-500" />
              <a
                href={user.socialAccounts}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                LinkedIn Profile
              </a>
            </div>
          )}
          {user.expertise && user.expertise.length > 0 && (
            <div className="flex items-center gap-2">
              <LocateIcon className="w-5 h-5 text-gray-500" />
              <p>{`Expertise: ${user.expertise.join(", ")}`}</p>
            </div>
          )}
          {user.achievements && user.achievements.length > 0 && (
            <div className="flex items-center gap-2">
              <TrophyIcon className="w-5 h-5 text-gray-500" />
              <ul className="list-disc list-inside ml-4">
                {user.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex justify-start space-x-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white mt-4 font-bold py-2 px-4 rounded"
            onClick={handleConnect}
          >
            Connect
          </button>
          <Link
            to={`/message/${user._id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white mt-4 font-bold py-2 px-4 rounded"
          >
            Chat
          </Link>
        </div>
      </div>
    </div>
  );
}
