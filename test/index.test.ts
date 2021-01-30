import helloWorld from '../src/index.ts';

test('Hello World', () => {
  console.log = jest.fn();
  helloWorld();
  expect(console.log).toHaveBeenCalledWith('Hello world!');
});
