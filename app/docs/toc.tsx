"use client";
import { getHtmlString } from "./utils";
import * as cheerio from "cheerio";

export function ToC({ children }: { children: React.ReactNode }) {
  const html = getHtmlString(children);
  const $ = cheerio.load(html);
  const textArr: string[] = [];

  $("h1, h2, h3, h4").each((_, element) => {
    textArr.push($(element).text());
  });

  return (
    <div>
      ToC
      <ul>
        {textArr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
