import * as elements from "typed-html";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { todos } from "../db/schema";

export const deleteTodo = async ({ params }) => {
  await db.delete(todos).where(eq(todos.id, params.id)).run();
};
