const mysqlssh = require('mysql-ssh');
const fs = require('fs');
const homedir = require('os').homedir;

mysqlssh.connect({
    host: '134.122.75.249',
    port: '3306',
    user: 'root',
    privateKey: fs.readFileSync(homedir+'/../home/.ssh/New1')
},
{
    host: '0.0.0.0',
    user: 'Bobl',
    password: 'DeltaHotel11',
    database: 'EventDB'
}
)
.then(client => {
    client.query('SELECT * FROM `users`', function (err, results, fields) {
        if (err) throw err
        console.log(results);
        mysqlssh.close()
    })
})
.catch(err => {
    console.log(err)
})