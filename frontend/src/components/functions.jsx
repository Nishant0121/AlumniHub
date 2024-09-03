import { BookOpenCheck, GraduationCap, UserRoundSearch } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

export default function Functions() {
  const { authUser } = useContext(AppContext);
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="relative h-full rounded-md w-full">
            <img
              className="z-0 w-full h-[60vh] rounded-md object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/the-gallery-3c000.appspot.com/o/images%2F1725071884674Designer%20(1).png?alt=media&token=c0776c5a-4f92-48dd-97fe-407e8c6dd095"
              alt=""
            />
            <div className="absolute bottom-0 rounded-md inset-x-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-2 lg:items-start lg:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Find your career path
              </h2>

              <Link
                to={"/login"}
                className="mt-3 inline-block rounded bg-indigo-600 px-12 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {authUser.userType === "user" ? (
              <Link
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                to={"/allusers"}
              >
                <span className="inline-block rounded-lg bg-indigo-50 p-3">
                  <UserRoundSearch />
                </span>

                <h2 className="mt-2 font-bold">Connect</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Connect with Alumni of your Institution.
                </p>
              </Link>
            ) : (
              <Link
                to={"/allusers"}
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              >
                <span className="inline-block rounded-lg bg-indigo-50 p-3">
                  <UserRoundSearch />
                </span>

                <h2 className="mt-2 font-bold">Connection Request</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  See the pending connection requests.
                </p>
              </Link>
            )}

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-indigo-50 p-3">
                <GraduationCap />
              </span>

              <h2 className="mt-2 font-bold">Assistance</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Get Assistance from Industry Experts.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-indigo-50 p-3">
                <BookOpenCheck />
              </span>

              <h2 className="mt-2 font-bold">Guidance</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Join Online Webinars for Your Career Growth.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-indigo-50 p-3">
                {/* Replace the SVG with the actual Accountant icon */}
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">AI ChatBot</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Get AI support
              </p>
            </a>
          </div>
        </div>
      </div>
      <dialog id="request" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}
