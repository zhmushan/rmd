import MarkdownIt from "markdown-it";
import React, { useState, useEffect } from "react";

const md = new MarkdownIt();

type PropsWithSrc = {
  src: string;
  children?: undefined;
};
type PropsWithChildren = {
  src?: undefined;
} & React.PropsWithChildren<{}>;

export function Markdown(
  { src, children }: PropsWithSrc | PropsWithChildren
) {
  let v = "", setv: React.Dispatch<React.SetStateAction<string>>;
  if (src) {
    [v, setv] = useState("");
    useEffect(() => {
      fetch(src).then(resp => {
        resp.text().then(text => setv(text));
      });
    });
  } else {
    v = String(children);
  }
  return <div dangerouslySetInnerHTML={{ __html: md.render(v) }} />;
}
