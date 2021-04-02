const Manager = require('../lib/Manager');

test("create an Manager object", () => {
  const manager = new Manager('Dave', '0001', 'hellodave@gmail.com', '000-000-0001');

  expect(manager.name).toBe('Dave');
  expect(manager.id).toBe('0001');
  expect(manager.email).toBe('hellodave@gmail.com');
  expect(manager.number).toBe('000-000-0001');
  // expect(manager.getRole()).toBe('Manager');
});