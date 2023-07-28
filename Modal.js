const mongoose = require('mongoose');
const { Schema } = mongoose;


const StudentDetails = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: Number
    },
    state: {
        type: String
    },
    budget: {
        type: String,
        enum:["50-60 LAKHS","60-80 LAKHS","80 LAKHS ABOVE"]
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});
const student = mongoose.model('student', StudentDetails);
module.exports = student;