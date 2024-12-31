const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook,
  AsyncSeriesWaterfallHook
} = require('tapable');

// const hooks = {
//   a: new SyncHook(['a', 'b'], 'name_a')
// }


// hooks.a.tap('a_1', (a, b) => {
//   console.log('--1--', a, b);
// })

// hooks.a.tap('a_2', (a, b) => {
//   console.log('--2--', a, b);
// })


// hooks.a.call(1, 2)


const hook = new SyncHook(["agr1", "agr2", "arg3"])


class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(["newSpeed"]),
      brake: new SyncHook(),
      calculateRoutes: new AsyncParallelHook(["source", "target", "routesList"])
    }
  }
}

const myCar = new Car();

myCar.hooks.brake.tap("WarningLampPlugin", (a) => {
  console.log("触发", a);
})

myCar.hooks.brake.tap("WarningLampPlugin2", (a) => {
  console.log("触发2", a);
})

myCar.hooks.brake.call();
