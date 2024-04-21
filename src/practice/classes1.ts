class Newbie {
  private name: string;
  readonly age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getAge(): number {
    return this.age;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  // public setAge(age: number): void {
  //   this.age = age;
  // }
  // error TS2540: Cannot assign to 'age' because it is a read-only property.
}
