import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { BaseHtml } from "../templates/baseHtml";

export const root = new Elysia().use(html()).get("/", ({ html }) =>
  html(
    <BaseHtml>
      <body
        class="flex w-full h-screen justify-center items-center"
        hx-get="/todos"
        hx-trigger="load"
        hx-swap="innerHTML"
      ></body>
    </BaseHtml>
  )
);
