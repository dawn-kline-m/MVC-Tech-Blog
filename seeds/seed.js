const sequelize = require('../config/connection');
const { User, TechPost, Comment } = require('../models');

const userData = require('./userData.json');
const techPostData = require('./techPostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const techPost = await TechPost.bulkCreate(techPostData);

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
