import { sum } from './index.js';
import { test } from 'node:test';
import assert from 'node:assert';

test('should return the sum of two numbers', () => {
  const operandA = 1;
  const operandB = 1;

  const actualValue = sum(operandA, operandB);

  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});