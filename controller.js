const conn = require('./connector');
const mysqlssh = require('mysql-ssh');


/* DISCLAIMER:

SQL functions in this file are built differently to the Boblberg standard.
This is due to them being written with mysql-ssh package instead of mssql.
*/

const getAllEvents = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  const result = await pool.query('SELECT * FROM `Event`', function (err, results, fields) {
    if (err) throw err
    console.log('Success');
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
  })
    .catch(err => {
      console.log(err)
      console.log('Didn\'t work');
      res.send('No connection to DB');
    })
}

//Untested
const getEventById = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'SELECT * FROM `Event` WHERE event_id = ?;';
  const results = await pool.query(sql, [req.body.eventID], function (err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
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
  const results = await pool.query(sql, [req.body.orgId], function (err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
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
  const results = await pool.query(sql, [req.body.dayStart], function (err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
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
  const results = await pool.query(sql, [req.body.place], function (err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
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
  const results = await pool.query(sql, [req.body.orgId], function (err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
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
  const results = await pool.query(sql, function (err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
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
  const results = await pool.query(sql, [req.body.eventID], function (err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
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
  const results = await pool.query(sql, [req.body.userID], function (err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
  })
    .catch(err => {
      console.log(err);
      console.log('Didn\'t work');
      res.send('No connection to DB');
    });
}

const createEvent = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  var conditions = [];
  let sqlStart = 'INSERT INTO `Event` (title, adress, start_day, start_time';
  let sqlEnd = ') VALUES (?,?,?,?';
  conditions.push(req.body.title);
  conditions.push(req.body.adress);
  conditions.push(req.body.startday);
  conditions.push(req.body.starttime);

  if (typeof req.body.endday !== 'undefined') {
    sqlStart += 'end_day';
    sqlEnd += ',?';
    conditions.push(req.body.endday);
  }
  if (typeof req.body.endtime !== 'undefined') {
    sqlStart += 'end_time';
    sqlEnd += ',?';
    conditions.push(req.body.endtime);
  }
  if (typeof req.body.description !== 'undefined') {
    sqlStart += 'description';
    sqlEnd += ',?';
    conditions.push(req.body.description);
  }
  if (typeof req.body.place !== 'undefined') {
    sqlStart += 'place';
    sqlEnd += ',?';
    conditions.push(req.body.place);
  }
  if (typeof req.body.organizerid !== 'undefined') {
    sqlStart += 'organizer_id';
    sqlEnd += ',?';
    conditions.push(req.body.organizerid);
  }
  /*
  if (typeof req.body !== 'undefined') {
    sqlStart += '';
    sqlEnd += ',?';
    conditions.push();
  }
  */
  let sql = sqlStart + sqlEnd + ');';
  const results = await pool.query(sql, conditions.values, function (err, results, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
  })
    .catch(err => {
      console.log(err);
      console.log('Didn\'t work');
      res.send('No connection to DB');
    });
}

//Untested
const createUserEvent = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'INSERT INTO User_Event (event_id, user_id) VALUE (?,?);';
  const results = await pool.query(sql, [req.body.eventID, req.body.userID], function (err, resilts, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
  })
    .catch(err => {
      console.log(err);
      console.log('Didn\'t work');
      res.send('No connection to DB');
    });
}

//Untested
const createOrganizer = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'INSERT INTO Organizer (user_id) VALUE (?);';
  const results = await pool.query(sql, [req.body.userID], function (err, resilts, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
  })
    .catch(err => {
      console.log(err);
      console.log('Didn\'t work');
      res.send('No connection to DB');
    });
}

//Untested
const createUser = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'INSERT INTO User (user_id) VALUE (?);';
  const results = await pool.query(sql, [req.body.userID], function (err, resilts, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
  })
    .catch(err => {
      console.log(err);
      console.log('Didn\'t work');
      res.send('No connection to DB');
    });
}

//Untested
const deleteEvent = async (req, res, next) => {
  const pool = await mysqlssh.connect(conn.sshConfig, conn.dbConfig);
  let sql = 'DELETE FROM Event WHERE event_id = ?;';
  const results = await pool.query(sql, [req.body.eventID], function (err, resilts, fields) {
    if (err) throw err;
    mysqlssh.close();
    var resultSet = {
      status : "200",
      data : results
    }
    res.send(resultSet);
  })
    .catch(err => {
      console.log(err);
      console.log('Didn\'t work');
      res.send('No connection to DB');
    });
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
module.exports = { getAllEvents, createEvent, getEventById, getEventByOrganizer, 
  getEventByDate, getEventByPlace, getOrgByUserID, getAllOrg, getUserByEventId, 
  getEventByUserId, createUserEvent, createOrganizer, createUser, deleteEvent
};