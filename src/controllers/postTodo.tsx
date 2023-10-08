import * as elements from "typed-html";
import { db } from "../db";
import { todos } from "../db/schema";
import { TodoItem } from "../components/TodoItem";

export const postTodo = async ({ body }) => {
  if (body.content.length === 0) throw new Error("Content cannot be empty");
  const newTodo = await db.insert(todos).values(body).returning().get();
  return <TodoItem {...newTodo} />;
};
