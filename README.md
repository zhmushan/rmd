# rmd - React Markdown

## Install

```sh
yarn add zhmushan/rmd
```

## Usage

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Markdown } from "rmd";

ReactDOM.render(<>
  {/* with url */}
  <Markdown
    src="https://raw.githubusercontent.com/zhmushan/abc/master/README.md"
  />

  {/* with local */}
  <Markdown src="./README.md" />

  {/* with simple string */}
  <Markdown>
    # Hello
  </Markdown>
</>, document.getElementById("root"));
```
