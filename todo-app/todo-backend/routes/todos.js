const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const redis = require('../redis')


/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {

  added_todos = await redis.getAsync('added_todos')

  console.log(added_todos)
  
  if (isNaN(added_todos) || added_todos === null) {
    await redis.setAsync('added_todos', 0)
  }

  redis.setAsync('added_todos', parseInt(added_todos)+1)

  visits = await redis.getAsync('added_todos')

  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {

  res.sendStatus(405); // Implement this
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  await req.todo.updateOne({ done: true })
  res.sendStatus(200);
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
