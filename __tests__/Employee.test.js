const Employee = require('../lib/Employee');

test('create an employee object', () => {
  const employee = new Employee('Rich', '1234', 'richard1234@gmail.com');

  expect(employee.name).toBe('Rich');
  expect(employee.id).toBe('1234');
  expect(employee.email).toBe('richard1234@gmail.com');
})