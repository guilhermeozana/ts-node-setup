import Person from "./person";

it("should say hello world", () => {
  const person = new Person();

  expect(person.sayHelloWorld()).toBe("Hello World");
});
