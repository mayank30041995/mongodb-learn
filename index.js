// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').findOne(
  //   { _id: new ObjectID('6507320bd690d03014eee3a9') },
  //   (error, user) => {
  //     if (error) {
  //       return console.log('Unable to fetch')
  //     }

  //     console.log(user)
  //   }
  // )

  // db.collection('users')
  //   .find({ age: 27 })
  //   .toArray((error, users) => {
  //     console.log(users)
  //   })

  // db.collection('tasks').findOne(
  //   { _id: new ObjectID('65073289cceb4a4a74a4f905') },
  //   (error, task) => {
  //     console.log(task)
  //   }
  // )

  db.collection('tasks')
    .find({ completed: false })
    .toArray((error, tasks) => {
      console.log(tasks)
    })
})
