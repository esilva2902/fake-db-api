let mongoose = require('mongoose');

let fakeCompaniesDBName = 'fakeCompany';

// LOCAL:
let fakeCompaniesDBUrl = `mongodb://localhost:27017/${fakeCompaniesDBName}`;

// MONGO-CLUSTER:
// let oauthServerOccupationalHealthDBUrl = `mongodb://hernandezramiro:jessicazuniga@cluster0-shard-00-00-ghsbn.mongodb.net:27017,cluster0-shard-00-01-ghsbn.mongodb.net:27017,cluster0-shard-00-02-ghsbn.mongodb.net:27017/${oauthDBName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;
// let occupationalHealthDBUrl = `mongodb://hernandezramiro:jessicazuniga@cluster0-shard-00-00-ghsbn.mongodb.net:27017,cluster0-shard-00-01-ghsbn.mongodb.net:27017,cluster0-shard-00-02-ghsbn.mongodb.net:27017/${occupationalHealthDBName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;

mongoose.Promise = global.Promise;

//mongoose.connect(process.env.MONGODB_URI);

mongoose.fakeCompaniesDB_conn = mongoose.createConnection(fakeCompaniesDBUrl, { useNewUrlParser: true } );

module.exports = { mongoose };
