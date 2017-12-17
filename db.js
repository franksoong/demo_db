const MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

const _ = require('lodash');


const insertDocuments = function (db, callback) {
    // Get the documents collection
  const collection = db.collection('documents');
    // Insert some documents
  collection.insertMany([
      { a: 1 }, { a: 2 }, { a: 3 },
  ], (err, result) => {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log('Inserted 3 documents into the document collection');
    callback(result);
  });
};

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray((err, docs) => {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    callback(docs);
  });
};


// Connection URL
// const uri = 'mongodb+srv://neosoong:qazQAZ_1@app1-mprw6.mongodb.net/test';
const uri = 'mongodb://neosoong:qazQAZ_1@app1-shard-00-00-mprw6.mongodb.net:27017,app1-shard-00-01-mprw6.mongodb.net:27017,app1-shard-00-02-mprw6.mongodb.net:27017/test?ssl=true&replicaSet=app1-shard-0&authSource=admin';
console.log('start to conneting...');
MongoClient.connect(uri, (err, client) => {
  assert.equal(null, err);

  console.log('Connected successfully to server');
  const db = client.db('demo_db');

  insertDocuments(db, () => {
    findDocuments(db, () => {
      client.close();
    });
  });
});

