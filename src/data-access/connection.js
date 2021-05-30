// connection to database;
const connect = ({ dotenv, mg }) => {
  return async function conn() {
    dotenv.config();

    let config = null;
    const env = process.env.NODE_ENV;
    if (env == `development` || env == `production`) {
      config = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
    }

    if (env == `test`) {
      config = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_TEST}`;
    }

    const conn = await mg.connect(config, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    return conn;
  };
};

module.exports = connect;
