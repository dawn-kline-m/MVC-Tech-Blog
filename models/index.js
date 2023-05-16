const User = require('./User');
const TechPost = require('./TechPost');
const Comment = require('./Comment');


User.hasMany(TechPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

TechPost.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(TechPost, {
  foreignKey: 'techPost_id'
});

module.exports = { User, TechPost, Comment };
