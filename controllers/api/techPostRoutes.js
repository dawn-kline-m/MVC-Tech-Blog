const router = require('express').Router();
const { TechPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTechPost = await TechPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTechPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const editTechPost = await TechPost.update(req.body, {
      where: {
        id: req.params.id
      }

    });

    res.status(200).json(editTechPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const techPostData = await TechPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!techPostData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(techPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
