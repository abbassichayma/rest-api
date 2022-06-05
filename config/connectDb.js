const mongoose = require('mongoose');


const ConnectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("succefully connection")
    } catch (error) {
        console.error(error);
    }
}

module.exports = ConnectDb