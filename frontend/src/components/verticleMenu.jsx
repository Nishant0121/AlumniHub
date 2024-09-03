import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";
import { useContext } from "react";

export default function VerticleMenu() {
  const navigate = useNavigate();
  const { authUser } = useContext(AppContext);
  const logoutUser = (e) => {
    e.preventDefault();
    // Remove user and token from local storage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/");
    window.location.reload();
  };
  return (
    <div className=" rounded-md w-full mr-2">
      <div className="flow-root w-full">
        <ul className="my-2 divide-y w-full divide-indigo-600">
          <li className="py-2">
            <ul className="space-y-1">
              <li>
                <Link
                  to={"/home"}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Home
                </Link>
                <Link
                  to={"/profile"}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Profile
                </Link>
              </li>

              {authUser.userType === "user" ? (
                <li>
                  <Link
                    to={"/allusers"}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                  >
                    All Alumni
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                    to={"/allusers"}
                  >
                    All Students
                  </Link>
                </li>
              )}

              {/* <li>
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Projects
                </Link>
              </li> */}

              <li>
                <Link
                  to={"/meet"}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Meetings
                </Link>
              </li>

              {/* <li>
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Calendar
                </Link>
              </li> */}
            </ul>
          </li>

          {/* <li className="py-2">
            <ul className="space-y-1">
              <li>
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Update
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Help
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </li> */}

          <li className="py-2">
            <form onSubmit={logoutUser}>
              <button
                type="submit"
                className="block bg-red-500 text-white w-full rounded-lg px-4 py-2 text-sm font-medium [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
              >
                Logout
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}
