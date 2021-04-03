const Employee = require('../lib/Employee');

test('create an employee object', () => {
  const employee = new Employee('Rich', '1234', 'richard1234@gmail.com');

  expect(employee.name).toBe('Rich');
  expect(employee.id).toBe('1234');
  expect(employee.email).toBe('richard1234@gmail.com');
});

test('getName() returns this.name', () => {
  const name = "Rich";
  const employee = new Employee(name);

  expect(employee.getName()).toBe(name);
});

test('getEmail() returns this.id', () => {
  const id = "1234";
  const employee = new Employee("Rich", id);

  expect(employee.getId()).toBe(id);
});

test('getEmail() returns this.email', () => {
  const email = "richard@gmail.com";
  const employee = new Employee("Rich", "1234", email);

  expect(employee.getEmail()).toBe(email);
});

test('getRole returns Employee', () => {
  const role = "Employee";
  const employee = new Employee("Rich", "1234", "richard@gmail.com", role);

  expect(employee.getRole()).toBe(role);
})