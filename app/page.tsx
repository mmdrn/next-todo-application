"use client";

import { useCallback, useMemo, useState } from "react";
import Todo from "@/components/todo";
import EmptyList from "@/components/empty-list";
import { useTodoStore } from "@/store/todo";
import moment from "moment";

export default function Home() {
  const items = useTodoStore((state) => state.items);
  const addItem = useTodoStore((state) => state.add);
  const removeItem = useTodoStore((state) => state.remove);
  const removeAllCompeletedItems = useTodoStore(
    (state) => state.removeAllCompeleted
  );
  const changeState = useTodoStore((state) => state.changeState);

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

  const handleChangeItemStatus = useCallback((id: string): void => {
    changeState(id);
  }, []);

  // render methods
  const handleRenderItems = useCallback(
    (status: boolean) => {
      const items = status ? completedItems : uncompletedItems;
      const renderedItems = items.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          title={item.title}
          date={moment(item.date).format("MMMM DD YYYY")}
          status={item.status}
          clickHandler={handleChangeItemStatus}
          deleteHandler={removeItem}
        />
      ));

      return renderedItems.length ? renderedItems : <EmptyList />;
    },
    [completedItems, uncompletedItems]
  );

  return (
    <main className="flex flex-col items-center justify-start gap-10 w-full">
      {/* header */}
      <header className="flex justify-center border-b border-slate-300 bg-slate-50 py-4 w-full">
        <div className="flex items-center justify-start gap-4 w-3/4 max-w-7xl">
          <h1 className="font-bold text-lg text-slate-700">
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

          {/* remove all compeleted */}
          <button
            type="submit"
            className="text-white text-sm px-4 h-10 flex items-center justify-center pb-0.5 mr-0 ml-auto rounded-md bg-green-600 enabled:hover:bg-green-800 transition-colors disabled:cursor-not-allowed disabled:opacity-45"
            disabled={!!!completedItems.length}
            onClick={removeAllCompeletedItems}
          >
            <span className="inline-block mr-2"></span>
            REMOVE ALL COMPELETED
          </button>
        </div>
      </header>

      <div className="flex flex-col items-center gap-10 justify-center w-3/4 max-w-7xl">
        {/* form */}
        <form
          className="flex flex-col ml-auto mr-auto w-full"
          onSubmit={(e) => {
            e.preventDefault();
            if (newItemTitle) handleAddNewItem();
          }}
        >
          <h2 className="font-bold mb-3 text-slate-700">
            <span className="inline-block mr-2">✏️</span> ADD NEW ITEM
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
              <span className="inline-block mr-2"></span>
              Add Item
            </button>
          </div>
        </form>

        {/* to-do section */}
        <section className="flex flex-col ml-auto mr-auto w-full">
          <h2 className="font-bold mb-3 text-slate-700">TO-DO</h2>
          <div className="grid gap-3">{handleRenderItems(false)}</div>
        </section>

        {/* completed section */}
        <section className="flex flex-col ml-auto mr-auto w-full">
          <h2 className="font-bold mb-3 text-slate-700">COMPLETED</h2>
          <div className="grid gap-3 w-full">{handleRenderItems(true)}</div>
        </section>
      </div>
    </main>
  );
}
