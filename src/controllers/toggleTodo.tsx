import * as elements from "typed-html";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { todos } from "../db/schema";
import { TodoItem } from "../components/TodoItem";

export const toggleTodo = async ({ params }) => {
  const oldTodo = await db
    .select()
    .from(todos)
    .where(eq(todos.id, params.id))
    .get();
  const newTodo = await db
    .update(todos)
    .set({ completed: !oldTodo!.completed })
    .where(eq(todos.id, params.id))
    .returning()
    .get();
  return <TodoItem {...newTodo} />;
};
