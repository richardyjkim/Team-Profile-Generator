const Engineer =require("../lib/Engineer");

test("create an github object", () => {
  const testGithub = "richardyjkim";
  const engineer = new Engineer("Richard", "910515", "richardkim@gmail.com", testGithub)

  expect(engineer.github).toBe(testGithub);
});

test ("if getRole() returns 'Engineer'.", () => {
  const role = "Engineer"
  const engineer = new Engineer("Richard", "910515", "richardkim@gmail.com", "richardyjkim");

  expect(engineer.getRole()).toBe(role);
});

test("is getGithub() works", () => {
  const testGithub = "richardyjkim";
  const engineer = new Engineer("Richard", "910515", "richardkim@gmail.com", "richardyjkim");

  expect(engineer.getGithub()).toBe(testGithub);
})