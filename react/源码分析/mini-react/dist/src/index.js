"use strict";
const content = MiniReact.createElement("div", null,
    MiniReact.createElement("a", { href: "xxx" }, "link"),
    MiniReact.createElement("p", null, "hello world"),
    MiniReact.createElement("p", null, "hello world"));
render(content, document.getElementById("root"));
console.log(JSON.stringify(content));
