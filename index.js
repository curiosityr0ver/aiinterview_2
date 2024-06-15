import 'regenerator-runtime/runtime';

async function example() {
  return await Promise.resolve('Hello, World!');
}

example().then(console.log);
