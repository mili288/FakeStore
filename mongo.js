const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://FakeStore:npskol8K96UW92C1@mongodb-tutorial.mbboy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return mongoose
}