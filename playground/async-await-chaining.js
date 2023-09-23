require('../db/mongoose')
const User = require('../models/user')
const Task = require('../models/task')

// User.findByIdAndUpdate('5c1a5a34d5a2ec046ca8f6bc', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//   const user = await User.findByIdAndUpdate(id, { age })
//   const count = await User.countDocuments({ age })
//   return count
// }

// updateAgeAndCount('650da538ccfd7bf64a6fa4a6', 2)
//   .then((count) => {
//     console.log(count)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

// Task.findByIdAndDelete('5c1a63e8f0d4c50656c5ab28').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('650dab3fef9b6cf61c5d5417')
  .then((count) => {
    console.log(count)
  })
  .catch((e) => {
    console.log(e)
  })
