class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    if (this.top > -1) {
      delete this.items[this.top];
      this.top -= 1;
    }
  }
}

describe('My stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it('is created empty', () => {

    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  it('can push to the top', () => {
    stack.push('hello');
    expect(stack.top).toBe(0);
  });
  it('can pop off', () => {
    stack.push('hello');
    stack.push('hello');
    stack.push('hello');
    stack.push('hello');
    stack.pop();
    stack.pop();
    expect(stack.top).toBe(1);
  });
});