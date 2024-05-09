const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const data = await Tag.findAll({
    include: [{ model: Product, through: ProductTag}]
  }).catch((err) => {
    res.json(err);
  });
  res.json(data);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  console.log(1);
   const data = await Tag.findByPk(req.params.id, {
    include: [{ model: Product, through: ProductTag }]
  }).catch((err) => {
    res.json(err);
  });
  res.json(data);
});

router.post('/', async (req, res) => {
  // create a new tag
  const data = await Tag.create(req.body);

  return res.json(data);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const data = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!data[0]) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const data = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
