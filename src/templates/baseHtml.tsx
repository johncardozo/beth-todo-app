import * as elements from "typed-html";

export const BaseHtml = ({ children }: elements.Children) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The BETH Stack</title>
        <script src="https://unpkg.com/htmx.org@1.9.6"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
      </head>
      ${children}
    </html>
  );
};
