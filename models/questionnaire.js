const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionnaireSchema = new Schema({
    pain: String,
    share: String,
    productivity: String,
    therapy: String,
    activity: String,
    negligence: String,
    precautions: String,
});

module.exports = mongoose.model('questionnaire', questionnaireSchema);