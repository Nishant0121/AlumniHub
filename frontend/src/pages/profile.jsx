import { useContext } from "react";
import { AppContext } from "../context";
import { Link } from "react-router-dom";

export default function Profile() {
  const { authUser } = useContext(AppContext);
  console.log(authUser);

  const renderUserSpecificInfo = () => {
    if (authUser.userType === "user") {
      return (
        <div>
          <h2 className="text-xl font-semibold mb-2">Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {authUser.interests?.map((interest, index) => (
              <div key={index} className="p-4 flex flex-col items-center">
                <p className="text-center font-medium">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (authUser.userType === "alumni") {
      return (
        <div>
          <h2 className="text-xl font-semibold mb-2">Career Path</h2>
          <p>{authUser.careerPath}</p>

          <h2 className="text-xl font-semibold mb-2 mt-4">Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {authUser.expertise?.map((expertise, index) => (
              <div key={index} className="p-4 flex flex-col items-center">
                <p className="text-center font-medium">{expertise}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 md:px-6">
      <header className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold mb-2">{authUser.name}</h1>
          <p className="text-muted-foreground">{authUser.institution}</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Basic Details</h2>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-muted-foreground" />
                <p>{authUser.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                <p>{authUser.mobile}</p>
              </div>

              {authUser.userType === "user" && (
                <>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Degree Pursuing: </p>
                    <p>{authUser.degreePursuing}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Graduation Year: </p>
                    <p>{authUser.expectedOrActualGraduationYear}</p>
                  </div>
                </>
              )}

              {authUser.userType === "alumni" && (
                <>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Degree: </p>
                    <p>{authUser.degree}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Graduation Year: </p>
                    <p>{authUser.yearOfGraduation}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Company: </p>
                    <p>{authUser.company}</p>
                  </div>
                </>
              )}

              <div className="flex items-center gap-2">
                <p className="font-medium">Social Account: </p>
                <a
                  href={authUser.socialAccounts}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {renderUserSpecificInfo()}

          <div>
            <h2 className="text-xl font-semibold mb-2">Achievements</h2>
            <div className="grid gap-2">
              {authUser.achievements?.map((achievement, index) => (
                <div key={index} className="p-4 flex flex-col items-center">
                  <p className="text-center font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          <Link to={"/myconnections"} className="my-3">
            <h2 className="font-semibold my-2 py-2 px-3 rounded-md text-white bg-indigo-600">
              Your Connections
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
