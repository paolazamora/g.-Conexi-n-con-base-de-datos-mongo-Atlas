const mongoose = require('mongoose');

const URI ="";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('');
};

module.exports = connectDB;
