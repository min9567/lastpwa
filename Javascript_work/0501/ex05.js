async function foo() {
  //   try {
  const result = await fetch(
    "https://6809e0571f1a52874cde2b14.mockapi.io/todos/1"
  );
  const body = await result.json();

  console.log(body);
  //   } catch (e) {
  //     console.log(e);
  //   }
  console.log("함수종료");
}
foo();

console.log("종료");
