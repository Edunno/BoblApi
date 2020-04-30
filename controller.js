const conn = require('./connector');
const catchAsync = require('./catchAsync');
const mysqlssh = require('mysql-ssh');

exports.getEvents = async (req, res, next) => {
    const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
    const result = await pool.query('SELECT * FROM `Event`', function (err, results, fields) {
        if (err) throw err
        console.log('Success');
        mysqlssh.close();
    })
        .catch(err => {
            console.log(err)
            console.log('Didn\'t work');
            return 'No connection to DB'
        })
};