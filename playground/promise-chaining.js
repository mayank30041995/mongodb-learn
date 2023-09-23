// Promise Chaining

require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('650dcfa8055ca0dda26cde1f', { age: 25 })
//   .then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 25 })
//   })
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

Task.findByIdAndDelete('650dd46d218b4e49a1918509')
  .then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
  })
  .then((result) => {
    console.log(result)
  })
  .catch((e) => {
    console.log(e)
  })

// const add = (a, b) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b)
//     }, 2000)
//   })

// add(1, 2)
//   .then((sum) => {
//     console.log(sum)

//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2)
//       })
//       .catch((e) => {
//         console.log(e)
//       })
//   })
//   .catch((e) => {
//     console.log(e)
//   })

// add(1, 1)
//   .then((sum) => {
//     console.log(sum)
//     return add(sum, 4)
//   })
//   .then((sum2) => {
//     console.log(sum2)
//   })
//   .catch((e) => {
//     console.log(e)
//   })
