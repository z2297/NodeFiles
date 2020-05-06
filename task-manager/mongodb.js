//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

//const id = new ObjectID()
//console.log(id)
//console.log(id.getTimestamp())

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database')
    }

    console.log('connected')

    const db = client.db(databaseName)

    //===========
    //delete data
    //===========
    db.collection('users').deleteMany({
        age: 77
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    //===========
    //update data
    //===========

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e3215b6ce2f0142b00e5d04")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e3215b6ce2f0142b00e5d04")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //============
    //searching db
    //============

    // db.collection('users').findOne({ name: 'Zach' }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch data')
    //     }
    //     console.log(user)
    // })

    // //valid search returns null
    // db.collection('users').findOne({ name: 'Zach', age: 1 }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch data')
    //     }
    //     console.log(user)
    // })

    // //search by id
    // db.collection('users').findOne({ _id: new ObjectID("5e3215b6ce2f0142b00e5d04") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch data')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ name: 'Zach'}).toArray((error, users) => {
    //     console.log(users)
    // })

    //===========
    //insert data
    //===========
    // db.collection('users').insertOne({
    //     name: 'Zach',
    //     age: 23
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Bob',
    //     age: 45
    // },{
    //     name: 'Rob',
    //     age: 26
    // },{
    //     name: 'will',
    //     age: 67
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert list of users')
    //     }

    //     console.log(result.ops)
    // })
})