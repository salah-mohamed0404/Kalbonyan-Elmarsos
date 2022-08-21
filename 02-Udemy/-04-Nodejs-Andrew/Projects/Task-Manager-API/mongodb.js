const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return console.log("Unable to connect to database");

    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "Salah",
    //     age: 18,
    //   },
    //   (error, result) => {
    //     if (error) return console.log("Unable to insert user");

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Gunther",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return console.log("Unable to insert user");

    //     console.log(result.insertedCount);
    //   }
    // );

    // // Challenge
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "See the course",
    //       completed: true,
    //     },
    //     {
    //       description: "Having fun",
    //       completed: false,
    //     },
    //     {
    //       description: "Set with family",
    //       completed: true,
    //     },
    //   ],
    //   function (error, result) {
    //     if (error) return console.log("Unable to insert user");

    //     console.log(result.insertedCount);
    //   }
    // );
  }
);
