const express = require('express');

const User = require('../model/user');

const router = express.Router();

router.post('register', async (req, res) => {

  const { email } = red.body;

  try {

    if (await User.findOne({ email })) {
      return res.send(400).send({ error: 'User already exists.' });
    }

    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({ user });
  } catch (err) {
    res.status(400).send({ error: 'Registration failed' });
  }

});


// O retorno esperado seria `/auth/register`
module.exports = app => app.use('/auth', router);

