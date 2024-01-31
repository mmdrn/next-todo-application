import { Props } from "./types";

export default function TodoComponent({ date, title, status }: Props) {
  return (
    <article className="rounded-md px-2 py-2 bg-slate-50 border border-slate-300 cursor-pointer hover:border-blue-500 transition-colors grid grid-cols-4 gap-4 w-full">
      <div className="flex flex-start justify-start col-span-3">
        <span className="flex items-center mr-4">{status ? "✅" : "⭕️"}</span>
        <p className="overflow-hidden truncate">{title}</p>
      </div>
      <time
        className="block text-sm text-slate-400 font-light text-right truncate leading-6"
        dateTime={date}
      >
        {date}
      </time>
    </article>
  );
}
