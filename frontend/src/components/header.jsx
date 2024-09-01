import { useContext } from "react";
import { AppContext } from "../context.jsx";
import {
  AlignJustify,
  Bell,
  CircleUserRound,
  ContactRound,
  X,
} from "lucide-react";
import Notification from "./notification.jsx";
import { Link } from "react-router-dom";

export default function Header() {
  const { isOpenMenu, setIsOpenMenu, authUser } = useContext(AppContext);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className="bg-indigo-600 rounded-md text-white p-2 ">
      <div className="container mx-auto flex max-h-[40px] justify-between items-center">
        <h1 className="text-xl font-bold flex justify-center items-center">
          <span className=" mr-2">
            <ContactRound />
          </span>
          <span>Alumni Hub </span>
        </h1>
        <div className="text-center"></div>

        <div className=" flex items-center ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className=" p-2 drawer-button">
              <Bell />
            </label>
          </div>
          {authUser ? (
            ""
          ) : (
            <button
              className="inline-flex h-10 items-center justify-center rounded-md mx-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <CircleUserRound />
            </button>
          )}

          {/* <Link to={"/login"} className="px-1.5 w-fit mx-1.5">
            <CircleUserRound />
          </Link> */}
          <div className="drawer-side z-50 scroll-container scroll-smooth">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li>
                <label htmlFor="my-drawer" className=" text-end drawer-button">
                  <X />
                </label>
              </li>
              <li className=" h-[100vh] scroll-container scroll-smooth">
                <Notification />
              </li>
            </ul>
          </div>
          <button
            onClick={handleMenu}
            className=" block  md:hidden hover:bg-indigo-700 text-white py-2 px-1.5 rounded"
          >
            {isOpenMenu ? <X /> : <AlignJustify />}
          </button>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <div className=" flex flex-col gap-4">
            <Link to={"/login"} className=" p-3 rounded-lg bg-indigo-500">
              Start as Student
            </Link>
            <Link to={"/loginalumni"} className=" p-3 rounded-lg bg-indigo-500">
              Start as Alumni
            </Link>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </header>
  );
}
