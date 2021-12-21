(function () {
  type ball = {
    name: string,
    diameter: number
  }
  // 接口 可以当成type使用
  interface CoderInterface {
    name: string,
    language: string,
    code(): void
  }
  // 同名接口合并
  interface CoderInterface {
    IDE: string
  }
  abstract class Person {
    public name: string  // public 任意访问和修改
    private _age: number  // private 只能在类里面修改
    protected from: string // 当前类和子类
    static readonly time: Date = new Date()
    constructor(name: string, age?: number, from?: string) {
      this.name = name
      this._age = age ? age : 0
      this.from = from ? from : ''
    }
    get age(): number {
      return this._age
    }
    public setAge(age: number): void {
      if (age >= 0) {
        this._age = age
      } else {
        throw ('年龄不能是负数')
      }
    }
    sayHello() {
      console.log(`My name is:${this.name},and i'm ${this.age} years old`)
    }
    // 抽象方法 子类必须实现
    abstract run(): void
  }
  class Man extends Person {
    tall: number
    constructor(name: string, age: number, tall?: number) {
      super(name, age)
      this.tall = tall ? tall : 0
    }
    public sayHello() {
      super.sayHello()
      console.log(`I'm a man,my name is ${this.name},I'm ${this.age} years old,I'm ${this.tall}cm`);
    }
    set country(from: string) {
      this.from = from
    }
    get country() {
      return this.from
    }
    pee() {
      console.log(`stand pee😊`)
    }
    run() {
      console.log(`I run fast`)
    }
  }
  class Woman extends Person {
    constructor(name: string, age: number) {
      super(name, age)
    }
    sayHello() {
      console.log(`I'm a woman,my name is ${this.name}`);
    }
    pee() {
      console.log(`I'm shy,I won't tell you`)
    }
    run() {
      console.log(`Do not let me run,I need rest`)
    }
  }
  // 类实现接口
  class Coder implements CoderInterface {
    name: string
    language: string
    IDE: string
    constructor(name: string, language?: string) {
      this.name = name
      this.language = language ? language : ''
      this.IDE = language === 'JS' ? 'VS Code' : 'Intelli J'
    }
    code() {
      console.log(`${this.language} is the best!!!`)
    }
  }
  // const per = new Person('zack', 28)
  // per.sayHello()
  console.log(Person.time)
  const man = new Man('Kevin', 30, 170)
  man.country = 'China'
  man.sayHello()
  man.pee()
  man.setAge(50)
  man.sayHello()
  console.log(man.country)
  try {
    man.setAge(-10)
  } catch (error) {
    console.error('出错了', error)
  }
  console.log(Man.time);
  const woman = new Woman('Anny', 18)
  woman.sayHello()
  woman.pee()
  const frontCoder: CoderInterface = new Coder('Wang', 'JS')
  frontCoder.code()
  // 属性的封装
})()