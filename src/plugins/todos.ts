import { Elysia } from "elysia";

import { deleteTodo } from "../controllers/deleteTodo";
import { getTodos } from "../controllers/getTodos";
import { postTodo } from "../controllers/postTodo";
import { toggleTodo } from "../controllers/toggleTodo";

import { TodoBody } from "../models/todoBody";
import { TodoParams } from "../models/todoParams";

export const todos = new Elysia({ prefix: "/todos" })
  .get("/", getTodos)
  .post("/", postTodo, { body: TodoBody })
  .post("/toggle/:id", toggleTodo, { params: TodoParams })
  .delete("/:id", deleteTodo, { params: TodoParams });
