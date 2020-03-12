# rmd - React Markdown

## Install

```sh
npm i zhmushan/rmd
```

## Usage

```tsx
import { Markdown } from "rmd";

// with url
<Markdown src="https://raw.githubusercontent.com/zhmushan/abc/master/README.md" />

// with local
<Markdown src="./README.md" />

// with simple string
<Markdown>
# Hello
</Markdown>
```
