import MarkdownIt from "markdown-it";
import React, { useState, useEffect } from "react";
const md = new MarkdownIt();
export function Markdown({ src, children }) {
    let v = "", setv;
    if (src) {
        useEffect(() => {
            [v, setv] = useState("");
            fetch(src).then(resp => {
                resp.text().then(text => setv(text));
            });
        });
    }
    else {
        v = String(children);
    }
    return React.createElement("div", { dangerouslySetInnerHTML: { __html: md.render(v) } });
}
