import { Expect, Test, TestCase } from 'alsatian';
import add from '../src/add';

export class AddTests {
  @Test()
  public shouldNotThrowError() {
    Expect(() => add(1, 2)).not.toThrow();
  }

  @TestCase(4, 5, 9)
  @TestCase(1, 2, 3)
  @TestCase(2, 1, 3)
  public shouldAddCorrectly(a: number, b: number, expected: number) {
    Expect(add(a, b)).toBe(expected);
  }
}
