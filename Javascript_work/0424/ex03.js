console.log("hi");

const test = await fetch("https://github.com/dron512/pwa/blob/main/test.html");

const res = await test.text();
console.log(res);

console.log("hi");
// console.log(test);

async function doA() {
  return "test";
}

console.log(doA());
