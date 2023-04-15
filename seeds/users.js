const db = require('../db')
const { User } = require('../models')
const middleware = require('../middleware')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users = [
    {
      username: 'Admin',
      email: 'admin@email.com',
      password: await middleware.hashPassword('adminpassword')
    },
    {
      username: 'User 1',
      email: 'user1@email.com',
      password: await middleware.hashPassword('password1')
    },
    {
      username: 'User 2',
      email: 'user2@email.com',
      password: await middleware.hashPassword('password2')
    },
    {
      username: 'User 3',
      email: 'user3@email.com',
      password: await middleware.hashPassword('password3')
    },
    {
      username: 'User 4',
      email: 'user4@email.com',
      password: await middleware.hashPassword('password4')
    },
    {
      username: 'User 5',
      email: 'user5@email.com',
      password: await middleware.hashPassword('password5')
    }
  ]

  await User.insertMany(users)
  console.log('Added some users!')
}

const run = async () => {
  await main()
  db.close()
}

run()
