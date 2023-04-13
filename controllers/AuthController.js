const { User } = require('../models')
const middleware = require('../middleware')

const register = async (req, res) => {
  console.log('register route hit')
  // try {
  //   const { username, email, password, userSettings } = req.body
  //   let passwordDigest = await middleware.hashPassword(password)
  //   const user = await User.create({
  //     username,
  //     email,
  //     password: passwordDigest,
  //     user_settings: userSettings
  //   })
  //   res.send(user)
  // } catch (error) {
  //   res.status(500).send({
  //     status: 'Error',
  //     msg: `${error.errors[0].type}: ${error.errors[0].message}`
  //   })
  // }
}

module.exports = {
  // Login,
  register
  // CheckSession
}
