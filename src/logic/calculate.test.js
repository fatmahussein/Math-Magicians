import calculate from './calculate';

describe('calculate function', () => {
  it('should handle AC button', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const buttonName = 'AC';
    const result = calculate(obj, buttonName);
    expect(result.total).toBe(null);
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });

  it('should handle numeric buttons', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const buttonName = '7';
    const result = calculate(obj, buttonName);
    expect(result.total).toBe('5');
    expect(result.next).toBe('37');
    expect(result.operation).toBe('+');
  });

  it('should handle decimal point button', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const buttonName = '.';
    const result = calculate(obj, buttonName);
    expect(result.total).toBe('5');
    expect(result.next).toBe('3.');
    expect(result.operation).toBe('+');
  });

  it('should handle = button with an operation and next', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result.total).toBe('8');
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
  });

  it('should handle +/- button for next', () => {
    const obj = {
      total: null,
      next: '7',
      operation: null,
    };
    const buttonName = '+/-';
    const result = calculate(obj, buttonName);
    expect(result.next).toBe('-7');
    expect(result.operation).toBe(null);
  });

  it('should handle operation button after pressing =', () => {
    const obj = {
      total: '10',
      next: null,
      operation: null,
    };
    const buttonName = '+';
    const result = calculate(obj, buttonName);
    expect(result.total).toBe('10');
    expect(result.next).toBe(null);
    expect(result.operation).toBe('+');
  });

  it('should handle operation button with an existing operation', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const buttonName = '-';
    const result = calculate(obj, buttonName);
    expect(result.total).toBe('8'); // Assuming you have '+' operation implementation
    expect(result.next).toBe(null);
    expect(result.operation).toBe('-');
  });
});
