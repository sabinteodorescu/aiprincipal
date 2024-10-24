const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
require('dotenv').config()

const saltRounds = 10

exports.signup = async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  try {
    const existingUser = await User.findOne({
      email: email
    })

    if (!existingUser) {
        const hash = bcrypt.hash(password, saltRounds)

        const newUser = await User.create({
          name: name,
          email: email,
          password: hash
        })

        const token = jwt.sign({
          id: newUser._id,
          name: name,
          email: email
        }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })

        console.log(newUser, token)

        return res.status(200).json({
          data: {
            user: {
              id: newUser._id,
              name: name,
              email: email
            },
            token: token
          }
        })
      } else {
        return res.status(400).json({ message: "User already exists!" })
      }
    } catch (err) {
    return res.status(500).json({ message: err })
  }
}