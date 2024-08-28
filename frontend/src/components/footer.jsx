import { ContactRound } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-indigo-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-2xl text-center items-center font-bold  sm:justify-start">
            <span className=" mr-2">
              <ContactRound />
            </span>
            <span>Alumni Hub </span>
          </div>

          <p className="mt-4 text-center text-sm text-indigo-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
