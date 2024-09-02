import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import VerticleMenu from "./components/verticleMenu";
import { useContext } from "react";
import { AppContext } from "./context";
import ChatBot from "./pages/chatbot";
import { BotMessageSquare } from "lucide-react";

export default function Layout() {
  const { isOpenMenu } = useContext(AppContext);

  return (
    <div className="relative flex flex-col drawer drawer-end max-w-[1700px] m-auto  p-1 sm:p-3 min-h-screen">
      <Header />
      <main className="flex relative flex-1">
        <div
          className={` ${
            isOpenMenu ? "flex" : "hidden"
          } fixed top-0 left-0 z-40 min-h-[100vh] min-w-[40vw] bg-white shadow-md`}
        >
          <VerticleMenu className="" />
        </div>
        <div className=" hidden md:flex min-w-[15vw] bg-white">
          <VerticleMenu className="" />
        </div>
        <div className=" h-[90vh] flex-1 overflow-y-auto scroll-container">
          <Outlet />
        </div>
      </main>
      <Footer />
      <button
        className="btn fixed text-white m-2 sm:m-3 md:m-5 lg:m-7 top-0 md:top-auto md:bottom-0 left-0"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <BotMessageSquare />
      </button>

      <dialog id="my_modal_3" className="modal ">
        <ChatBot />
      </dialog>
    </div>
  );
}
