// const add: (a: number, b: number) => 
//   number = (a: number, b: number) => a + b

// const add = (a: number, ...rest: number[]) =>
//    rest.reduce((a, b) => a + b)

// 重载
// interface Direction {
//   top: number
//   left: number
//   bottom:number
//   right:number
// }

// function assigned (all: number):Direction
// function assigned(topAndLeft: number, bottomAndRoght: number):Direction
// function assigned(top: number, left: number, bottom: number,right: number):Direction
// function assigned (a: number, b?: number,c?: number,d?: number) {
//   if(b === undefined && c === undefined && d ===undefined) {
//     b = c = d = a
//   }else if(c === undefined && d === undefined) {
//     c = a
//     d = b
//   }else {
//     return {
//       top: a,
//       left: b,
//       bottom: c,
//       right: d
//     }
//   }
// }
// assigned(1)
// assigned(1,2)
// assigned(1,2,3) // 不行
// assigned(1,2,3,4)

// 泛型
// function returnItem<T> (param: T):T {
//   return param
// }

// 多个类型参数
// function swap<T, U> (tuple: [T, U]):[U, T] {
//   return [tuple[1], tuple[0]]
// }

// function getArrayLength<T> (arg: Array<T>): Array<T> {
//   console.log((arg as Array<any>).length)
//   return arg
// }

// 泛型接口
// interface ReturnItemFn<T> {
//   (param: T): T
// }
// const returnItem: ReturnItemFn<number> = param => param

// 泛型类
// class Stack<T> {
//   private arr: T[] = []

//   public push(item: T) {
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }

// 泛型约束
// type Params = number | string
// class Stack<T extends Params> {
//   private arr: T[] = []

//   public push(item: T) {
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }

// const stack1 = new Stack<string>()
// const stack2 = new Stack<Boolean>() // 不行

// 使用多重类型进行泛型约束
// interface FirstInterface {
//   doSomething(): number
// }

// interface SecondInterface {
//   doSomethingElse(): string
// }

// interface ChildInterface extends FirstInterface, SecondInterface {}

// class Demo<T extends ChildInterface> {
//   private test: T

//   useT() {
//     this.test.doSomething()
//     this.test.doSomethingElse()
//   }
// }

function Factory<T> (type: (new () => T)):T {
  return new type()
}