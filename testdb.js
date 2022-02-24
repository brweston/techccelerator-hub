const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (e) => {
    if (e) return console.error(e.message)

    console.log("connection success")
})

/* db.run(
    `CREATE TABLE users(username, full_name, last_completed)`
) */

/* const q = `INSERT INTO users(username, full_name, last_completed) values(?, ?, ?)`

db.run(q, ['brweston', "Bridget Weston", 8], (err) => {
    if (err) return console.error(err.message)

    console.log("new row created!")
}) */

const g = `SELECT * FROM users`

db.all(g, [], (err, rows) => {
    if (err) return console.error(err.message)
    rows.forEach(row => console.log(row))
})


db.close((err) => {
    if (err) return console.error(err.message)
})