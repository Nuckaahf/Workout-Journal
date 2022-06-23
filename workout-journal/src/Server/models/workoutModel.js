const { Pool } = require("pg");

const PG_URI =
  "postgres://icszetcm:7MDGJYy3Q9SFByWGRTRyIdyWJiHatIgP@castor.db.elephantsql.com/icszetcm";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
