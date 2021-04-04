const Manager = require('../lib/Manager');

test("create an Manager object", () => {
  const manager = new Manager('Dave', '0001', 'hellodave@gmail.com', '000-000-0001');

  expect(manager.name).toBe('Dave');
  expect(manager.id).toBe('0001');
  expect(manager.email).toBe('hellodave@gmail.com');
  expect(manager.number).toBe('000-000-0001');
});

test("creat a number object", () => {
  const testNumber = "010-9920-6543"
  const manager = new Manager('Dave', '0001', 'hellodave@gmail.com', testNumber);

  expect(manager.number).toBe(testNumber);
});

test("if getRole() returns 'Manager'.", () => {
  const role = "Manager";
  const manager = new Manager('Dave', '0001', 'hellodave@gmail.com', '010-9920-6543');
  
  expect(manager.getRole()).toBe(role);
});

test("is getNumber() works", () => {
  const testNumber = "010-9920-6543";
  const manager = new Manager('Dave', '0001', 'hellodave@gmail.com', '010-9920-6543');

  expect(manager.getNumber()).toBe(testNumber);
});