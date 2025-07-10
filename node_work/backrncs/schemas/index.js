const mongoose = require("mongoose");
require('dotenv').config(); // process env에 설정한걸 갖옴

const mongo_url = process.env.MONGO_URL;

const connect = () => {
    mongoose.connect(mongo_url, { dbName: 'rncs', useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
         console.log("MongoDB DB Connected");
        })
        .catch((err) => {
            console.error(err);
        });
}
module.exports = connect;