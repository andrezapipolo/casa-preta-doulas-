const mongoose = require('mongoose')

const connect = async() => {
   try {
     await mongoose.connect(process.env.ADMIN_ID, {
      useNewUrlParser: true,
      useUnifiedTopology: true
     })

     console.log('Database connected!')
   } catch (error) {
    console.error(error)
   }
}

module.exports = {
  connect
}