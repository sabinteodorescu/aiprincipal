const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
require('dotenv').config()

const saltRounds = 10

exports.signup = async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  console.log(req.body)

  try {
    const existingUser = await User.findOne({
      email: email
    })

    if (!existingUser) {
      const hash = await bcrypt.hash(password, saltRounds)

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
    console.log(err)
    return res.status(500).json({ message: err })
  }
}

exports.signin = async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  console.log(req.body)

  try {
    const existingUser = await User.findOne({
      email: email
    })

    console.log(existingUser)

    if (existingUser) {
      const result = await bcrypt.compare(password, existingUser.password)

      console.log(result)

      if (result) {
        const token = jwt.sign({
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email
        }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })

        return res.status(200).json({
          data: {
            user: {
              id: existingUser._id,
              name: existingUser.name,
              email: existingUser.email
            },
            token: token
          }
        })
      } else {
        return res.status(400).json({ message: "Wrong password!" })
      }
    } else {
      return res.status(400).json({ message: "User doesn't exist!" })
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: err })
  }
}