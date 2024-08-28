import { Monitor, SquareArrowOutUpRight } from "lucide-react";

export default function Notification() {
  return (
    <div role="alert" className="rounded-xl   bg-white p-4 hover:bg-indigo-300">
      <div className="flex items-start gap-4">
        <Monitor className="mt-1 h-6 w-6 shrink-0 text-indigo-600" />

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">
            {" "}
            SIH Event{" "}
          </strong>

          <p className="mt-1 text-sm text-gray-700">National Level Hacathon.</p>

          <div className="mt-4 flex gap-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              <span className="text-sm"> Visit </span>

              <SquareArrowOutUpRight className="h-4" />
            </a>

            <button className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-gray-50">
              <span className="text-sm">Revert</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
