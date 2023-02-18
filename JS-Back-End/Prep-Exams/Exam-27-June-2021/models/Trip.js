const { Schema, model, Types } = require('mongoose');


const userSchema = new Schema({
  startPoint: { type: String, minLength: [4, 'Start Point must be at least 4 characters'] },
  endPoint: { type: String, minLength: [4, 'End Point must be at least 4 characters'] },
  date: { type: String, required: true },
  time: { type: String, required: true },
  carImage: {
    type: String, validate: {
      validator: (value) => /https?:\/\/./i.test(value),
      message: 'Invalid image URL'
    }
  },
  carBrand: { type: String, minLength: [4, 'Car Brand must be at least 4 characters'] },
  seats: { type: Number, required: [true, 'Seats must be between 0 and 4 inclusive'], min: 0, max: 4 },
  price: { type: Number, required: [true, 'Price must be between 1 and 50 inclusive'], min: 1, max: 50 },
  description: { type: String, minLength: [10, 'Description must be at least 10 characters'] },
  owner: { type: Types.ObjectId, ref: 'User' },
  buddies: { type: [Types.ObjectId], ref: 'User', default: [] }
});

const Trip = model('Trip', userSchema);

module.exports = Trip;