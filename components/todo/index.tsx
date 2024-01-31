import { Props } from "./types";

export default function Todo({
  date,
  title,
  status,
  clickHandler,
  deleteHandler,
}: Props) {
  return (
    <article
      className="rounded-md px-2 py-2 bg-slate-50 border border-slate-300 cursor-pointer hover:border-blue-500 transition-colors grid grid-cols-4 gap-4 w-full"
      onClick={clickHandler}
    >
      <div className="flex flex-start justify-start col-span-3">
        <span className="flex items-center mr-4">{status ? "✅" : "⭕️"}</span>
        <p className="overflow-hidden truncate">{title}</p>
      </div>

      <div className="flex items-center justify-end">
        <time
          className="block text-sm text-slate-400 font-light text-right truncate leading-6"
          dateTime={date}
        >
          {date}
        </time>
        <button
          type="button"
          className="ml-4 text-sm leading-6"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            deleteHandler ? deleteHandler(e) : undefined;
          }}
        >
          🗑️
        </button>
      </div>
    </article>
  );
}
