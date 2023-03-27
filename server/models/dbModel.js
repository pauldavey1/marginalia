const mongoose = require('mongoose');
require('dotenv').config();

const URI =
  'mongodb+srv://pauldavey:' +
  process.env.MONGODB_PASSWORD +
  '@cluster0.0nafvnn.mongodb.net/?retryWrites=true&w=majority';

// connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: marginalia,
});

const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  author: String,
  isbn13: Number,
  url: String,
});

const noteSchema = new Schema({
  text: { type: String, required: true },
  page: Number,
  isQuote: { type: String, required: true },
  mediaId: {
    type: Schema.Types.ObjectId,
    ref: 'media',
  },
});

const Media = mongoose.model('media', mediaSchema);
const Note = mongoose.model('note', noteSchema);

module.exports = {
  Media,
  Note,
};
