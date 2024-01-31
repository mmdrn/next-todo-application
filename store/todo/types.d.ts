type Todo = {
  id: string;
  title: string;
  date: string;
  status: boolean;
};

type TodoStore = {
  items: Todo[];
  add: (todo: Omit<Todo, "id">) => void;
  remove: () => void;
  removeAllCompeleted: () => void;
};

export { Todo, TodoStore };
