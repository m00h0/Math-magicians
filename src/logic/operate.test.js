import operate from './operate';

describe('operate', () => {
  it('should return the correct result for addition of two positive numbers', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  it('should return the correct result for subtraction of two positive numbers', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });

  it('should return the correct result for multiplication of two positive numbers', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  it('should return "Can\'t divide by 0." for division by 0', () => {
    expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('should return "Can\'t find modulo as can\'t divide by 0." for modulo by 0', () => {
    expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate(2, 3, '^')).toThrowError("Unknown operation '^'");
  });
});
