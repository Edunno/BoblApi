const conn = require('./connector');
const mysqlssh = require('mysql-ssh');

const getEvents = async (req, res, next) => {
    const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
    const result = await pool.query('SELECT * FROM `Event`', function (err, results, fields) {
        if (err) throw err
        console.log('Success');
        mysqlssh.close();
        res.send(results);
    })
        .catch(err => {
            console.log(err)
            console.log('Didn\'t work');
            res.send('No connection to DB');
        })
}

const createEvent = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'INSERT INTO `Event` (title, adress, start_day, start_time) VALUES (?,?,?,?);'
  const results = await pool.query(sql, [req.body.title, req.body.adress, req.body.startday, req.body.starttime], function(err , results, fields) {
    if (err) throw err;
    res.send(results)
  })
  .catch(err => {
    console.log(err);
    console.log('Didn\'t work');
    res.send('No connection to DB');
  })
}
/*
const protect = async (req, res, next) => {
    next();
  
    if (!token) {
      return next(
        new AppError("You are not logged in! Please log in to get access.", 401)
      );
    }
};
*/
module.exports = { getEvents, createEvent};