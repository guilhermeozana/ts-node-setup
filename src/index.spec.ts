import Person from ".";

it("should say my name", () => {
  const person = new Person();

  expect(person.sayMyName()).toBe("Guilherme");
});
