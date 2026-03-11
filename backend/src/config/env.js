require('dotenv').config();

module.exports = {
  PORT:          process.env.PORT         || 5000,
  MONGO_URI:     process.env.MONGO_URI    || 'mongodb+srv://tushar_bhardwaj:Tushar%40123@cluster0.fn39ozw.mongodb.net/shopez?retryWrites=true&w=majority',
  JWT_SECRET:    process.env.JWT_SECRET   || 'changeme',
  JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN || '7d',
  NODE_ENV:      process.env.NODE_ENV     || 'development',
};
