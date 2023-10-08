import { Elysia } from "elysia";
import { root } from "./plugins/root";
import { todos } from "./plugins/todos";

const app = new Elysia()
  .use(root)
  .use(todos)
  .listen(process.env.PORT ?? 3000, ({ hostname, port }) => {
    console.log(`🔥 App is running at http://${hostname}:${port}...`);
  });
