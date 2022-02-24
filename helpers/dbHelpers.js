const sqlite3 = require('sqlite3').verbose()

let db

function startDB() {
    const dbb = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (e) => {
        if (e) return console.error(e.message)

        console.log("connection success")
    })
    db = dbb
}

/* db.run(
    `CREATE TABLE users(username, full_name, last_completed)`
) */

function addUser(username, full_name, last_completed) {
    const q = `INSERT INTO users(username, full_name, last_completed) values(?, ?, ?)`

    db.run(q, [username, full_name, last_completed], (err) => {
        if (err) return console.error(err.message)

        console.log(`New user ${full_name} created!`)
    }) 
}

function getUser(username, callback) {
    const q = `SELECT * FROM users WHERE username="${username}"`

    db.all(q, (err, rows) => {
        if (err) return console.error(err.message)
        callback(rows[0])
    })
}

function getAllUsers(callback) {
    let q = `SELECT * FROM users`
    db.all(q, [], (err, rows) => {
        if (err) return console.error(err.message)
        callback(rows)
    })
}

function closeDB() {
    db.close((err) => {
        if (err) return console.error(err.message)
    })
}

module.exports = { getUser, addUser, startDB, getAllUsers }