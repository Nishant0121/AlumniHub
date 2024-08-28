export default function ChatBot() {
  return (
    <div className="modal-box bg-white min-h-[100vh] min-w-[100vw] sm:min-h-[80vh] sm:min-w-[80vw]">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Press ESC key or click on ✕ button to close</p>
    </div>
  );
}
