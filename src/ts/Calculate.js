export class Calculate {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getResult() {
    console.log('Hello from Calc!');
    return this.a + this.b;
  }
}
