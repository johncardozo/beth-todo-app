import * as elements from "typed-html";
import { Todo } from "../db/schema";
import { TodoItem } from "./TodoItem";
import { TodoForm } from "./TodoForm";

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
      <TodoForm />
    </div>
  );
};
