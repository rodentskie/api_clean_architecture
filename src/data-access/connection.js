// connection to database;
const connect = ({ dotenv, pg }) => {
  return async function conn() {
    dotenv.config();
    const { Pool } = pg;
    let config = null;
    const env = process.env.NODE_ENV;
    if (env == `development` || env == `production`) {
      config = {
        user: process.env.PGUSER,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
        host: process.env.PGHOST,
      };
    }

    if (env == `test`) {
      config = {
        user: process.env.PGUSER,
        database: process.env.PGDATABASE_TEST,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
        host: process.env.PGHOST,
      };
    }

    const pool = new Pool(config);

    return pool;
  };
};

module.exports = connect;
