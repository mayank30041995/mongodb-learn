const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const User = require('./models/user')
const app = express()
const port = process.env.PORT || 3000
const router = new express.Router()

app.use(express.json())
app.use(router)
// app.use(userRouter)
// app.use(taskRouter)

router.get('/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.send(users)
  } catch (e) {
    res.status(500).send()
  }
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
