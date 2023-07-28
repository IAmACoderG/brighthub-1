const mongoose = require('mongoose');
const url = "mongodb+srv://rahul:rahuljha@cluster0.un9nzek.mongodb.net/BrightHuB"

const connectToMongo = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("connect to mongo successfully");

    } catch (err) {
        console.log("failed to connect", err)
    }
};

module.exports = connectToMongo;
