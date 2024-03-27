const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://burhanazeem159357:diXQzoTv4ZKGnW1m@dreamescape.766dgpw.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;