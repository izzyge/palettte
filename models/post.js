const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {type: String, required: true},
  color1: {type: String, required: true},
  color2: {type: String, required: true},
  color3: {type: String, required: true},
  color4: {type: String, required: true},
  color5: {type: String, required: true}
});

module.exports = mongoose.model('Post', PostSchema);
