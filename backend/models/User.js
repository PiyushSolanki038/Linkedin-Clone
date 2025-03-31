const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  headline: String,
  location: String,
  about: String,
  experience: [
    {
      title: String,
      company: String,
      location: String,
      from: Date,
      to: Date,
      current: Boolean,
      description: String
    }
  ],
  education: [
    {
      school: String,
      degree: String,
      fieldOfStudy: String,
      from: Date,
      to: Date,
      description: String
    }
  ],
  skills: [String],
  profilePic: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);