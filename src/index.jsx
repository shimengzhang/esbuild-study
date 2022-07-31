// import Server from "react-dom/server";

// let Greet = () => <h1>Hello, juejin!</h1>;
// console.log(Server.renderToString(<Greet />));


// 这段代码目前是无法运行的
import { render } from "https://cdn.skypack.dev/react-dom";
import React from 'https://cdn.skypack.dev/react'

let Greet = () => <h1>Hello, juejin!</h1>;

render(<Greet />, document.getElementById("root"));
