const mongoose = require('mongoose');


// TODO change database name to assignment
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/21-Aug-2021';

module.exports = async (app) => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(CONNECTION_STRING, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('Database connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};