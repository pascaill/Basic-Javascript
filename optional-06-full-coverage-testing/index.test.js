import { describe, it, expect } from 'bun:test';
import sum from './index.js';

describe('sum function', () => {
   it('should return the correct sum of two positive numbers', () => {
    expect(sum(3, 4)).toBe(7);
    expect(sum(10, 20)).toBe(30);
  });

  it('should return 0 if either number is negative', () => {
    expect(sum(-1, 5)).toBe(0);
    expect(sum(3, -7)).toBe(0);
    expect(sum(-3, -4)).toBe(0);
  });

  it('should return 0 if either input is not a number', () => {
    expect(sum('string', 5)).toBe(0);
    expect(sum(5, 'string')).toBe(0);
    expect(sum(null, 10)).toBe(0);
    expect(sum(undefined, 10)).toBe(0);
    expect(sum(10, {})).toBe(0);
  });

  it('should handle zero values correctly', () => {
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it('should handle large numbers correctly', () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
    expect(sum(123456789, 987654321)).toBe(1111111110);
  });
});
