const testFn = (number: number, callback: Function) => {
  if (number > 10) {
    callback(number);
  }
};

import { test, describe, vi, expect } from 'vitest';

describe('functions', () => {
  test('create a mock funtion', () => {
    const callback = vi.fn();
    testFn(12, callback);
    expect(callback).toHaveBeenCalled(); // callback函数是否被调用
    expect(callback).toHaveBeenCalledWith(12); // callback函数的参数是不是12
  });
  test('spy on method', () => {});
  test('mock thiird party module', () => {});
});
