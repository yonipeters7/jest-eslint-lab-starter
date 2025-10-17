const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

// Tests for capitalizeWords
describe('capitalizeWords', () => {
  test('capitalizes the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
    expect(capitalizeWords('javaScript is fun')).toBe('JavaScript Is Fun');
  });

  test('handles empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('handles single word', () => {
    expect(capitalizeWords('hello')).toBe('Hello');
  });

  test('does not affect already capitalized letters', () => {
    expect(capitalizeWords('Hello World')).toBe('Hello World');
  });

  test('handles multiple spaces', () => {
    expect(capitalizeWords('hello   world')).toBe('Hello   World');
  });
});

// Tests for filterActiveUsers
describe('filterActiveUsers', () => {
  const users = [
    { name: 'Alice', isActive: true },
    { name: 'Bob', isActive: false },
    { name: 'Charlie', isActive: true },
  ];

  test('returns only active users', () => {
    expect(filterActiveUsers(users)).toEqual([
      { name: 'Alice', isActive: true },
      { name: 'Charlie', isActive: true },
    ]);
  });

  test('returns empty array if no active users', () => {
    expect(filterActiveUsers([{ name: 'Bob', isActive: false }])).toEqual([]);
  });

  test('returns empty array if input is empty', () => {
    expect(filterActiveUsers([])).toEqual([]);
  });
});

// Tests for logAction
describe('logAction', () => {
  test('returns a log message including the action, username, and timestamp', () => {
    const result = logAction('login', 'Alice');
    expect(result).toMatch(/^User Alice performed login at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
  });
});

