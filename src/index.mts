import L from "./i18n/i18n-node.js";

console.log("ok");
console.log(L.default.en.HI({ name: "Chris" }));

// Does not work

// import { L } from "./i18n/i18n-node.js";

// console.log("ok");
// console.log(L.en.HI({ name: "Chris" }));
