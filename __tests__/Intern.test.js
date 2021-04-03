const Intern = require("../lib/Intern");

test("create an school object", () => {
  const testSchool = "UCB";
  const intern = new Intern("Diane", "0515", "diane@gmail.com", testSchool)

  expect(intern.school).toBe(testSchool);
});

test("if getRole() returns 'Intern", () => {
  const role = "Intern";
  const intern = new Intern("Diane", "0515", "diane@gmail.com", "UCB");

  expect(intern.getRole()).toBe(role);
});

test("is getSchool() works", () => {
  const testSchool = "UCB";
  const intern = new Intern("Diane", "0515", "diane@gmail.com", testSchool);

  expect(intern.getSchool()).toBe(testSchool);
})