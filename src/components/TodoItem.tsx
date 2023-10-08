import * as elements from "typed-html";
import { Todo } from "../db/schema";

export const TodoItem = ({ content, completed, id }: Todo) => {
  return (
    <div class="flex flex-row space-x-3">
      <p>{content}</p>
      <input
        type="checkbox"
        checked={completed}
        hx-post={`/todos/toggle/${id}`}
        hx-target="closest div"
        hx-swap="OuterHMTL"
      />
      <button
        class="text-red-500"
        hx-delete={`/todos/${id}`}
        hx-swap="OuterHMTL"
        hx-target="closest div"
      >
        X
      </button>
    </div>
  );
};
