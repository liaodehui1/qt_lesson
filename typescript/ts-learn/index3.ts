// // 类型断言
// interface Person {
//   name:string
//   age:number
// }
// const person = {} as Person
// person.name = 'xiaomuzhu'
// person.age = 20

// // 双重断言
// const Person = 'abc' as any as Person
// person.name = 'xiaomuzhu'

// 类型守卫
// class Person {
//   name = 'wn'
//   age = 18
// }

// class Animal {
//   name = 'petty'
//   color = 'pink'
// }

// function getSomething(arg: Person | Animal) {
//   if(arg instanceof Animal) {
//     console.log(arg.color)
//     console.log(arg.age)
//   }
//   if(arg instanceof Person) {
//     console.log(arg.age)
//     console.log(arg.color)
//   }
//   if('color' in arg) {
//     console.log(arg.age)
//     console.log(arg.color)
//   }
// }

// // 字面量类型守卫
// type Foo = {
//   kind: 'foo',
//   foo: number
// }

// type Bar = {
//   kind: 'bar',
//   bar: number
// }

// function doStuff(arg: Foo | Bar) {
//   if(arg.kind === 'foo') {
//     console.log(arg.foo)
//     console.log(arg.bar)
//   }else {
//     console.log(arg.bar)
//     console.log(arg.foo)
//   }
// }