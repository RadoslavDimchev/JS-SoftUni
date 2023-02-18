const { Schema, model, Types } = require('mongoose');

const housingSchema = new Schema({
  name: { type: String, minLength: [6, 'Name should be at least 6 characters'] },
  type: { type: String, required: true, enum: ['Apartament', 'Villa', 'House'] },
  year: { type: Number, required: true, min: [1850, 'Year have to be at least 1850'], max: [2021, 'Year have to be at most 2021'] },
  city: { type: String, minLength: [4, 'City should be at least 4 characters'] },
  image: {
    type: String, validate: {
      validator: (value) => /https?:\/\/./i.test(value),
      message: 'Invalid URL'
    }
  },
  propertyDescription: { type: String, required: true, maxLength: [60, 'Description should be at most 60 characters'] },
  availablePieces: { type: Number, required: true, min: [0, 'Year have to be at least 0'], max: [20, 'Year have to be at most 10'] },
  createdAt: { type: String, required: true, default: () => (new Date()).toISOString() },
  rented: { type: [Types.ObjectId], ref: 'User', default: [] },
  owner: { type: Types.ObjectId, ref: 'User' }
});

housingSchema.index({ type: 1 }, {
  collation: {
    locale: 'en',
    strength: 2
  }
});

const Housing = model('Housing', housingSchema);

module.exports = Housing;