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

      {/* to-do section */}
      <section className="flex flex-col ml-auto mr-auto w-3/4 mt-10">
        <h2 className="font-bold mb-3 text-slate-700">To-do</h2>
        <div className="grid gap-3">
          <article className="rounded-md px-2 py-2 bg-slate-50 border border-slate-300 cursor-pointer hover:border-blue-500 transition-colors">
            <div className="flex flex-start justify-start">
              <span className="flex items-center mr-4">⭕️</span>
              <p>We should work on our immigration.</p>
            </div>
          </article>
          <article className="rounded-md px-2 py-2 bg-slate-50 border border-slate-300">
            <div className="flex flex-start justify-start">
              <span className="flex items-center mr-4">⭕️</span>
              <p>We should work on our immigration.</p>
            </div>
          </article>
          <article className="rounded-md px-2 py-2 bg-slate-50 border border-slate-300">
            <div className="flex flex-start justify-start">
              <span className="flex items-center mr-4">⭕️</span>
              <p>We should work on our immigration.</p>
            </div>
          </article>
          <article className="rounded-md px-2 py-2 bg-slate-50 border border-slate-300">
            <div className="flex flex-start justify-start">
              <span className="flex items-center mr-4">⭕️</span>
              <p>We should work on our immigration.</p>
            </div>
          </article>
        </div>
      </section>

      {/* completed section */}
      <section className="flex flex-col ml-auto mr-auto w-3/4 mt-10">
        <h2 className="font-bold mb-3 text-slate-700">Completed</h2>
        <div className="grid gap-3 w-full">
          <article className="rounded-md px-2 py-2 bg-slate-50 border border-slate-300 cursor-pointer hover:border-blue-500 transition-colors grid grid-cols-4 gap-4 w-full">
            <div className="flex flex-start justify-start col-span-3">
              <span className="flex items-center mr-4">✅</span>
              <p className="overflow-hidden truncate">
                We should work on our immigration.
              </p>
            </div>
            <time
              className="block text-sm text-slate-400 font-light text-right truncate leading-6"
              dateTime="2024-01-31"
            >
              January 31, 2024
            </time>
          </article>
          <article className="rounded-md px-2 py-2 bg-slate-50 border border-slate-300 cursor-pointer hover:border-blue-500 transition-colors grid grid-cols-4 gap-4 w-full">
            <div className="flex flex-start justify-start col-span-3">
              <span className="flex items-center mr-4">✅</span>
              <p className="overflow-hidden truncate">
                Fix the leaky faucet in the bathroom.
              </p>
            </div>
            <time
              className="block text-sm text-slate-400 font-light text-right truncate leading-6"
              dateTime="2024-01-31"
            >
              January 30, 2024
            </time>
          </article>
          <article className="rounded-md px-2 py-2 bg-slate-50 border border-slate-300 cursor-pointer hover:border-blue-500 transition-colors grid grid-cols-4 gap-4 w-full">
            <div className="flex flex-start justify-start col-span-3">
              <span className="flex items-center mr-4">✅</span>
              <p className="overflow-hidden truncate">
                Exercise for at least 30 minutes.
              </p>
            </div>
            <time
              className="block text-sm text-slate-400 font-light text-right truncate leading-6"
              dateTime="2024-01-31"
            >
              January 23, 2024
            </time>
          </article>
          <article className="rounded-md px-2 py-2 bg-slate-50 border border-slate-300 cursor-pointer hover:border-blue-500 transition-colors grid grid-cols-4 gap-4 w-full">
            <div className="flex flex-start justify-start col-span-3">
              <span className="flex items-center mr-4">✅</span>
              <p className="overflow-hidden truncate">
                Complete the project proposal by Friday.
              </p>
            </div>
            <time
              className="block text-sm text-slate-400 font-light text-right truncate leading-6"
              dateTime="2024-01-31"
            >
              January 19, 2024
            </time>
          </article>
        </div>
      </section>
    </main>
  );
}
