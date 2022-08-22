const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return console.log("Unable to connect to database");

    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("630252b74cac67e599e5288c") },
    //   function (error, user) {
    //     if (error) return console.log("Unable to fetch user");

    //     console.log(user);
    //   }
    // );

    db.collection("users")
      .find({ age: 18 })
      .toArray(function (error, users) {
        console.log(users);
      });

    db.collection("users")
      .find({ age: 18 })
      .count(function (error, count) {
        console.log(count);
      });
  }
);
