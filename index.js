const mongo = require('./mongo')

const connectToMongoDB = async () => {
    await mongo().then(mongoose => {
        try {
            console.log('Connect to mongodb!')
        } finally {
            mongoose.connection.close()
        }
    })
}

connectToMongoDB()