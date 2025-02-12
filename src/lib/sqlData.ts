import initSqlJs from 'sql.js'
import sqlWasm from 'sql.js/dist/sql-wasm.wasm'

export default class SqlData {
  db: any
  constructor() {
    this.db = null
    // this.init()
    initSqlJs().then(function (SQL) {
      const db = new SQL.Database()

      // 创建一个用户表
      db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)')

      console.log('Table created successfully!')
    })
  }
  async created() {
    // const SQL = await initSqlJs({ locateFile: (filename) => `/cards.db` })
    this.db = new SQL.Database()
  }
  async init() {
    await this.created()
    // this.db.run(
    //   CREATE TABLE users (
    //     id INTEGER PRIMARYKEY,
    //   )
    // )
  }

  //  增
  // async add(tableName: string, addData: []) {
  //   const addSql = `INSERT INTO ${tableName} VALUES (0, 'hello')`
  //   this.db.run(addSql)
  // }

  //  删
  //  改

  //  查
  async get(tableName: string) {
    const sql = `SELECT * FROM ${tableName}`
    const results = this.db.exec(sql)
    return results
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
