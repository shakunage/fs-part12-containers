const express = require('express');
const redis = require('../redis')
const router = express.Router();

const configs = require('../util/config')

/* GET index data. */
router.get('/', async (req, res) => {

  visits = await redis.getAsync('visits')

  console.log(visits)
  
  if (isNaN(visits) || visits === null) {
    await redis.setAsync('visits', 0)
  }

  visits = await redis.getAsync('visits')

  redis.setAsync('visits', parseInt(visits)+1)

  visits = await redis.getAsync('visits')

  res.send({
    ...configs
  });
});

/* GET statistics. */
router.get('/statistics', async (req, res) => {

  added_todos = await redis.getAsync('added_todos')
  console.log("hoge")

  if (isNaN(added_todos) || added_todos === null) {
    await redis.setAsync('added_todos', 0)
  }

  added_todos = await redis.getAsync('added_todos')
  res.send({
    added_todos
  });
});

module.exports = router;