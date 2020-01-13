import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import { getData } from './data';

// window.onload = async () => {
//   const x = [1, 2, 3, 4]  // 5
//   const y = [1, 3, 5, 7]  // 9
//   tfvis.render.scatterplot(
//     { name: '训练数据' },
//     { values: x.map((xVal, i) => {
//       return { x: xVal, y: y[i] }
//     })}
//   )
//   // 新建一个模型
//   const model = tf.sequential();
//   model.add(tf.layers.dense({ units: 1, inputShape: 1 }))
//   // 损失函数：告诉模型 预测的值 跟真实值之间的 误差情况
//   // 优化器：
//   model.compile({
//     loss: tf.losses.meanSquaredError,
//     optimizer: tf.train.sgd(0.1)
//   })
//   // 张量
//   const input  = tf.tensor(x);
//   const label = tf.tensor(y);
//   await model.fit(input, label, {
//     batchSize: 4,
//     epochs: 100,
//     callbacks: tfvis.show.fitCallbacks(
//       { name: '过程' },
//       ['loss']
//     )
//   })
//   const a = tf.tensor([5]);
//   const output = model.predict(a);
//   output.print();
// }

window.onload = async () => {
  let data = getData()
  tfvis.render.scatterplot(
    { name: '数据' },
    { values: data }
  )

  // 生成一个模型
  const model = tf.sequential()
  // 神经网络
  // 添加层 输入层 -> 隐藏层 -> 输出层
  model.add(tf.layers.dense({
    units: 1, // 单层单个神经元
    inputShape: [2],
    activation: 'sigmoid' // 激活函数
  }))

  model.compile({
    loss: tf.losses.logLoss,
    optimizer: tf.train.adam(0.1)
  })

  const input = data.map(p => [p.x, p.y])
  // [[-2, -2], [2,2]]
  const output = data.map(p => p.label)
  // [0, 1]
  await model.fit(tf.tensor(input), tf.tensor(output), {
    batchSize: 40,
    epochs: 20,
    callbacks: tfvis.show.fitCallbacks(
      {name: '效果'},
      ['loss']
      )
  })
  const point = [4, 2]
  const res = model.predict(tf.tensor([point]))
  res.print();
}
