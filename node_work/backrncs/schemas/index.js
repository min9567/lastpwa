const mongoose = require("mongoose");

const mongo_url = "mongodb+srv://nju9567:gc9JcSyDUXr6JWB6@cluster0.4kaug1g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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