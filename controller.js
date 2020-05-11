const conn = require('./connector');
const mysqlssh = require('mysql-ssh');

const getAllEvents = async (req, res, next) => {
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
  let sql = 'INSERT INTO `Event` (title, adress, start_day, start_time) VALUES (?,?,?,?);';
  const results = await pool.query(sql, [req.body.title, req.body.adress, req.body.startday, req.body.starttime], function(err , results, fields) {
    if (err) throw err;
    mysqlssh.close();
    res.send(results)
  })
  .catch(err => {
    console.log(err);
    console.log('Didn\'t work');
    res.send('No connection to DB');
  });
}

//Untested
const getEventById = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'SELECT * FROM `Event` WHERE event_id = ?;';
  const results = await pool.query(sql, [req.body.eventID], function(err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    res.send(results)
  })
  .catch(err => {
    console.log(err);
    console.log('Didn\'t work');
    res.send('No connection to DB');
  });
}

//Untested
const getEventByOrganizer = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'SELECT * FROM `Event` WHERE organizer_id = ?;';
  const results = await pool.query(sql, [req.body.orgId], function(err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    res.send(results)
  })
  .catch(err => {
    console.log(err);
    console.log('Didn\'t work');
    res.send('No connection to DB');
  });
}

//Untested
const getEventByDate = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'SELECT * FROM `Event` WHERE start_day = ?;';
  const results = await pool.query(sql, [req.body.dayStart], function(err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    res.send(results)
  })
  .catch(err => {
    console.log(err);
    console.log('Didn\'t work');
    res.send('No connection to DB');
  });
}

//Untested
const getEventByPlace = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'SELECT * FROM `Event` WHERE place = ?;';
  const results = await pool.query(sql, [req.body.place], function(err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    res.send(results)
  })
  .catch(err => {
    console.log(err);
    console.log('Didn\'t work');
    res.send('No connection to DB');
  });
}

//Untested
const getOrgByUserID = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'SELECT * FROM `Organizer` WHERE user_Id = ?;';
  const results = await pool.query(sql, [req.body.orgId], function(err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    res.send(results)
  })
  .catch(err => {
    console.log(err);
    console.log('Didn\'t work');
    res.send('No connection to DB');
  });
}

//Untested
const getAllOrg = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'SELECT * FROM `Organizer`;';
  const results = await pool.query(sql, function(err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    res.send(results)
  })
  .catch(err => {
    console.log(err);
    console.log('Didn\'t work');
    res.send('No connection to DB');
  });
}

//Untested
const getUserByEventId = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'SELECT COUNT (*) FROM User_Event WHERE event_id = ?;';
  const results = await pool.query(sql, [req.body.eventID], function(err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    res.send(results)
  })
  .catch(err => {
    console.log(err);
    console.log('Didn\'t work');
    res.send('No connection to DB');
  });
}

//Untested
const getEventByUserId = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'SELECT * FROM EventDB.User_Event INNER JOIN Event WHERE user_id = ?;';
  const results = await pool.query(sql, [req.body.userID], function(err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    res.send(results)
  })
  .catch(err => {
    console.log(err);
    console.log('Didn\'t work');
    res.send('No connection to DB');
  });
}

const createUserEvent = async (req, res, next) =>{

}
/*
const getEventByOrganizer = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = ';';
  const results = await pool.query(sql, [], function(err, results, fields) {
    if (err) throw err;
    res.send(results)
  })
  .catch(err => {
    console.log(err);
    console.log('Didn\'t work');
    res.send('No connection to DB');
  });
}
*/
module.exports = { getAllEvents, createEvent, getEventById, getEventByOrganizer, getEventByDate, getEventByPlace, getOrgByUserID, getAllOrg, getUserByEventId,  getEventByUserId, createUserEvent};