type Todo = {
  id: string;
  title: string;
  date: number;
  status: boolean;
};

type TodoStore = {
  items: Todo[];
  add: (todo: Omit<Todo, "id" | "date">) => void;
  remove: (id: string) => void;
  removeAllCompeleted: () => void;
  changeState: (id: string) => void;
};

export { Todo, TodoStore };
