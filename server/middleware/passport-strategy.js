const { Strategy, ExtractJwt } = require('passport-jwt')
const { model } = require('mongoose')
const keys = require('../keys')
const User = model('users')

// Autherization: Bearer token (dafa.fdf.wewercdhdshre..kghgh)
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.JWT
}

model.exports = new Strategy(options, async (payload, done) => {
  try {
    const candidate = await User.findById(payload.userId).select('id')

    if (candidate) {
      done(null, candidate)
    } else {
      done(null, false)
    }
  } catch (error) {
    console.log(error)
  }
})
