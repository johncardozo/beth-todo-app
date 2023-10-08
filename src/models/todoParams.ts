import { Elysia, t } from "elysia";

export const TodoParams = t.Object({
  id: t.Numeric(),
});
