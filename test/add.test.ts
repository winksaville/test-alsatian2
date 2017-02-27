import { Test } from 'alsatian';
import add from '../src/add';

export class AddTests {
  @Test()
  public shouldNotThrowError() {
    Expect(() => add(1, 2)).not.toThrow();
  }
}
