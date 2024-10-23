import { describe, it, expect } from 'bun:test';
import { sum } from './index.js'; 

describe('sum function', () => {
  it('should return 5 when adding 2 and 3', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return 0 when adding -1 and 1', () => {
    expect(sum(-1, 1)).toBe(0);
  });

  it('should return -5 when adding -2 and -3', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('should return 0 when adding 0 and 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should return 4 when adding 1.5 and 2.5', () => {
    expect(sum(1.5, 2.5)).toBe(4);
  });
});
