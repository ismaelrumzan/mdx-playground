import { renderToStaticMarkup } from "react-dom/server";

export function getHtmlString(child: React.ReactNode): string {
  const markup = renderToStaticMarkup(child as React.ReactElement);
  return markup;
}
