const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const participantSchema = new Schema({
  answers: {
    type: [Number],
    required: true
  },
  cbti: {
    type: String,
    required: true
  },
  finalCharacter: {
    type: String,
    required: true
  }
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
