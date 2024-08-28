import { Link } from "react-router-dom";

export default function VerticleMenu() {
  return (
    <div className=" rounded-md w-full mr-2">
      <div className="flow-root w-full">
        <ul className="my-2 divide-y w-full divide-indigo-600">
          <li className="py-2">
            <ul className="space-y-1">
              <li>
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Team
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Meetings
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700"
                >
                  Calendar
                </Link>
              </li>
            </ul>
          </li>

          <li className="py-2">
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
          </li>

          <li className="py-2">
            <form action="#">
              <button
                type="submit"
                className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-700 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
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
