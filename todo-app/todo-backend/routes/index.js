const express = require('express');
const redis = require('../redis')
const router = express.Router();

const configs = require('../util/config')

/* GET index data. */
router.get('/', async (req, res) => {
  redis.setAsync('visits', 23)

  visits = redis.getAsync('visits')
  console.log(visits)

  res.send({
    ...configs,
    ...redis.getAsync('visits')
  });
});

module.exports = router;