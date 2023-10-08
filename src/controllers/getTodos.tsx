import * as elements from "typed-html";
import { db } from "../db";
import { todos } from "../db/schema";
import { TodoList } from "../components/TodoList";

export const getTodos = async () => {
  const data = await db.select().from(todos).all();
  return <TodoList todos={data} />;
};
