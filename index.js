const mysqlssh = require('mysql-ssh');
const fs = require('fs');
const homedir = require('os').homedir;

mysqlssh.connect({
    host: '134.122.75.249',
    port: '22',
    user: 'root',
    privateKey: fs.readFileSync(homedir+'/../home/.ssh/New1')
},
{
    host: '0.0.0.0',
    user: 'Bobl',
    port: '3306',
    password: 'DeltaHotel11',
    database: 'EventDB'
}
)
.then(client => {
    client.query('SELECT * FROM `User`', function (err, results, fields) {
        if (err) throw err
        console.log(results);
        console.log('Success');
        mysqlssh.close()
    })
})
.catch(err => {
    console.log(err)
    console.log('Didn\'t work');
})