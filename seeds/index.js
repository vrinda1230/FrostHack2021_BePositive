const Questionnaire = require('../models/questionnaire');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/mentalHealth', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
});

const sample = ['Yes', 'No']


const seedDB = async() => {

    await Questionnaire.deleteMany({});
    for (let i = 0; i < 20; i++) {
        const random12 = Math.floor((Math.random() * 1000) % 2);
        const answers = new Questionnaire({
            pain: sample[random12],
            share: sample[random12],
            productivity: sample[random12],
            activity: 'Music',
            negligence: sample[random12],
            precautions: sample[random12],
            therapy: 'Music',
        });

        await answers.save();
        console.log(answers)
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});