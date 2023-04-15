const { User } = require('../models')
const middleware = require('../middleware')

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    let hashedPassword = await middleware.hashPassword(password)
    const user = await User.create({
      username,
      email,
      password: hashedPassword
    })
    res.status(200).send(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    let user = await User.findOne({ email: email })
    console.log(user)
    if (user && (await middleware.comparePassword(password, user.password))) {
      let payload = {
        id: user.id,
        email: user.email
      }
      if (user.get('admin')) {
        payload.admin = true
      }
      let token = middleware.createToken(payload)
      return res.status(200).send({ user: payload, token })
    }
    res
      .status(500)
      .send({ status: 'Error', msg: 'Incorrect email or password' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const checkSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  login,
  register,
  checkSession
}
