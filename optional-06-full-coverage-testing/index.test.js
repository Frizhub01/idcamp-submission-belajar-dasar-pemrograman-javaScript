import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('a sum function', () => {
  it('should return the sum of two positive numbers', () => {
    // Arrange
    const a = 3;
    const b = 5;
    const expected = 8;

    // Action
    const actual = sum(a, b);

    // Assert
    assert.strictEqual(actual, expected);
  });

  it('should return 0 if the first argument is not a number', () => {
    // Arrange
    const a = '3';
    const b = 5;
    
    // Action
    const actual = sum(a, b);
    
    // Assert
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should return 0 if the second argument is not a number', () => {
    // Arrange
    const a = 3;
    const b = '5';
    
    // Action
    const actual = sum(a, b);
    
    // Assert
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should return 0 if the first argument is a negative number', () => {
    // Arrange
    const a = -3;
    const b = 5;
    
    // Action
    const actual = sum(a, b);
    
    // Assert
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should return 0 if the second argument is a negative number', () => {
    // Arrange
    const actual = sum(3, -5);
    
    // Assert
    const expected = 0;
    assert.strictEqual(actual, expected);
  });
});