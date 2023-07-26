/*
Create a resolved javascript Promise that will return 'Hello World!'.
*/

async function promiseHelloWorld() {
  return await "Hello World!";
}

promiseHelloWorld().then((res) => {
  console.log(res);
}); //Hello World!
