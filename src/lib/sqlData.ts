import initSqlJs from 'sql.js'

class SqlData {
  db: any
  constructor() {
    this.db = null
  }
  async created() {
    const SQL = await initSqlJs({ locateFile: (filename) => `/${filename}` })
    this.db = new SQL.Database()
  }
  init() {
    // await this.created()
    // this.db.run(
    //   CREATE TABLE users (
    //     id INTEGER PRIMARYKEY,
    //   )
    // )
  }
}

// SELECT
//     prizes.*,
//     levels.*
// FROM
//     prizes
// LEFT JOIN
//     levels
// ON
//     prizes.prizeLevel = levels.lid;

//   CREATE TABLE users (
//     id INTEGER PRIMARY KEY,
//     name TEXT,
//     email TEXT
//   );
// );

// this.db.run(`
//   INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
//   INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com');
// `);

// const results = this.db.exec("SELECT * FROM users;");
// const users = results[0].values;
// console.log(users);
