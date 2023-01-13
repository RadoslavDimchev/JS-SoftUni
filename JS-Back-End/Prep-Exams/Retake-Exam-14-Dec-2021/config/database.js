const mongoose = require('mongoose');


const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/14-Dec-2021';

module.exports = async (app) => {
  try {
    mongoose.set('strictQuery', true);
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