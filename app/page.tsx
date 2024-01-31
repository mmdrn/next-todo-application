import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start w-full">
      <header className="border-b border-slate-300 bg-slate-50 p-4 w-full flex items-center justify-start">
        <h1 className="font-bold mr-10 text-lg text-slate-700">
          Next Todo Application
        </h1>
        <input
          type="text"
          className="border border-slate-300 rounded-md w-96 px-2 leading-10 text-sm outline-none focus:border-blue-500 transition-colors"
          placeholder="Search"
        />
        <button
          type="button"
          className="rounded-md bg-blue-500 hover:bg-blue-700 transition-colors text-white text-sm px-4 h-10 flex items-center pb-0.5 mr-0 ml-auto"
        >
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="w-5 h-5 mr-2 relative top-[1px]"
          />
          Add Item
        </button>
      </header>
    </main>
  );
}
