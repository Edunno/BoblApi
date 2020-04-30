const mysqlssh = require('mysql-ssh');
const fs = require('fs');
const homedir = require('os').homedir;


async function getSomeData() {
    console.log('Starting mysqlssh.');
    var resHolder = '';
    mysqlssh.connect({
        host: '134.122.75.249',
        user: 'root',
        privateKey: fs.readFileSync(homedir + '/../home/.ssh/New1')
    },
        {
            host: '0.0.0.0',
            port: '3306',
            user: 'Bobl',
            password: 'DeltaHotel11',
            database: 'EventDB'
        }
    )
        .then(client => {
            console.log('Connecting...');
            client.query('SELECT * FROM `Event`', function (err, results, fields) {
                if (err) throw err
                console.log('Success');
                mysqlssh.close();
            })
        })
        .catch(err => {
            console.log(err)
            console.log('Didn\'t work');
            return 'No connection to DB'
        })
}
function closeConn() {
    
}
const sshConfig = {
    host: '134.122.75.249',
    user: 'root',
    privateKey: fs.readFileSync(homedir + '/../home/.ssh/New1')
};

const dbConfig = {
    host: '0.0.0.0',
    port: '3306',
    user: 'Bobl',
    password: 'DeltaHotel11',
    database: 'EventDB'
};

module.exports = { getSomeData, closeConn, sshConfig, dbConfig }