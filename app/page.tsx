"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";
import Todo from "@/components/todo";
import EmptyList from "@/components/empty-list";
import { useTodoStore } from "@/store/todo";
import moment from "moment";

export default function Home() {
  const items = useTodoStore((state) => state.items);
  const addItem = useTodoStore((state) => state.add);
  const removeItem = useTodoStore((state) => state.remove);

  const [newItemTitle, setNewItemTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const uncompletedItems = useMemo(() => {
    return items.filter(
      (item) =>
        !item.status &&
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [items, searchQuery]);

  const completedItems = useMemo(() => {
    return items.filter(
      (item) =>
        item.status &&
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [items, searchQuery]);

  // methods
  const handleAddNewItem = () => {
    addItem({
      title: newItemTitle,
      status: false,
    });

    setNewItemTitle("");
  };

  const handleChangeItemStatus = (id: string) => {
    const items = useTodoStore.getState().items;
    const item = items.find((item) => item.id === id);

    if (item) {
      item.status = !item.status;
      useTodoStore.setState({ items: [...items] });
    } else {
      console.error("item not found!!");
    }
  };

  // render methods
  const handleRenderItems = (status: boolean) => {
    const items = status ? completedItems : uncompletedItems;
    const renderedItems = items.map((item) => (
      <Todo
        key={item.id}
        title={item.title}
        date={moment(item.date).format("MMMM DD YYYY")}
        status={item.status}
        clickHandler={() => handleChangeItemStatus(item.id)}
        deleteHandler={() => removeItem(item.id)}
      />
    ));

    return renderedItems.length ? renderedItems : <EmptyList />;
  };

  return (
    <main className="flex flex-col items-center justify-start gap-10 w-full">
      {/* header */}
      <header className="flex justify-center border-b border-slate-300 bg-slate-50 p-4 w-full">
        <div className="flex items-center justify-start w-3/4">
          <h1 className="font-bold mr-10 text-lg text-slate-700">
            <span className="inline-block mr-2">📝</span> Next Todo Application
          </h1>

          {/* search input */}
          <input
            type="text"
            className="border border-slate-300 rounded-md w-96 px-2 leading-10 text-sm outline-none focus:border-blue-500 transition-colors"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>
      </header>

      <div className="flex flex-col items-center gap-10 justify-center w-3/4">
        {/* form */}
        <form
          className="flex flex-col ml-auto mr-auto w-full"
          onSubmit={(e) => {
            e.preventDefault();
            if (newItemTitle) handleAddNewItem();
          }}
        >
          <h2 className="font-bold mb-3 text-slate-700">
            <span className="inline-block mr-2">✏️</span> Add new item
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <input
              type="text"
              className="border border-slate-300 rounded-md px-2 leading-10 h-10 pb-0.5 text-sm outline-none focus:border-blue-500 transition-colors col-span-3"
              placeholder="Write a to-do"
              value={newItemTitle}
              onChange={(e) => setNewItemTitle(e.target.value)}
            />

            <button
              type="submit"
              className="w-full max-w-36 text-white text-sm px-4 h-10 flex items-center justify-center pb-0.5 mr-0 ml-auto rounded-md bg-blue-600 enabled:hover:bg-blue-800 transition-colors disabled:cursor-not-allowed disabled:opacity-45"
              disabled={!!!newItemTitle}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="w-5 h-5 mr-2 relative top-[1px]"
              />
              Add Item
            </button>
          </div>
        </form>

        {/* to-do section */}
        <section className="flex flex-col ml-auto mr-auto w-full">
          <h2 className="font-bold mb-3 text-slate-700">To-do</h2>
          <div className="grid gap-3">{handleRenderItems(false)}</div>
        </section>

        {/* completed section */}
        <section className="flex flex-col ml-auto mr-auto w-full">
          <h2 className="font-bold mb-3 text-slate-700">Completed</h2>
          <div className="grid gap-3 w-full">{handleRenderItems(true)}</div>
        </section>
      </div>
    </main>
  );
}
