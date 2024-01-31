"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import Todo from "@/components/todo";
import EmptyList from "@/components/empty-list";
import { useTodoStore } from "@/store/todo";
import moment from "moment";

export default function Home() {
  const items = useTodoStore((state) => state.items);
  const addItem = useTodoStore((state) => state.add);

  const uncompletedItems = useMemo(() => {
    return items.filter((item) => !item.status);
  }, [items]);

  const completedItems = useMemo(() => {
    return items.filter((item) => item.status);
  }, [items]);

  // methods
  const handleAddNewItem = () => {
    addItem({
      title: "123",
      status: false,
    });
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
  const handleRenderItems = (status: Boolean) => {
    if (status) {
      return completedItems.length ? (
        completedItems.map((item) => (
          <Todo
            key={item.id}
            title={item.title}
            date={moment(item.date).format("MMMM DD YYYY")}
            status={item.status}
            clickHandler={() => handleChangeItemStatus(item.id)}
          />
        ))
      ) : (
        <EmptyList />
      );
    } else {
      return uncompletedItems.length ? (
        uncompletedItems.map((item) => (
          <Todo
            key={item.id}
            title={item.title}
            date={moment(item.date).format("MMMM DD YYYY")}
            status={item.status}
            clickHandler={() => handleChangeItemStatus(item.id)}
          />
        ))
      ) : (
        <EmptyList />
      );
    }
  };

  return (
    <main className="flex flex-col items-start justify-start w-full">
      {/* header */}
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
          onClick={handleAddNewItem}
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
        <div className="grid gap-3">{handleRenderItems(false)}</div>
      </section>

      {/* completed section */}
      <section className="flex flex-col ml-auto mr-auto w-3/4 mt-10">
        <h2 className="font-bold mb-3 text-slate-700">Completed</h2>
        <div className="grid gap-3 w-full">{handleRenderItems(true)}</div>
      </section>
    </main>
  );
}
