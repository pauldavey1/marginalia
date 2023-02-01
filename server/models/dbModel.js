const { Pool } = require('pg');

const PG_URI =
  'postgres://wiqaswav:YrK7A0omFTHpNkjclJoLe2BwMvbqdJUc@fanny.db.elephantsql.com/wiqaswav';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// table books: _id (serial), title (varchar, not null), author (varchar, not null), isbn13 (int)
// table quotes: _id (serial), text (varchar, not null), page (int), quote (boolean), bookid (foreign key from books)

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
