const { MongoClient, ObjectID, ObjectId } = require("mongodb");

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

    // db.collection("users")
    //   .find({ age: 18 })
    //   .toArray(function (error, users) {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 18 })
    //   .count(function (error, count) {
    //     console.log(count);
    //   });

    // Coding challenge on find and findOne
    db.collection("tasks").findOne(
      { _id: new ObjectID("6302543a6c5603bbae34a29a") },
      function (error, lastTask) {
        if (error) return console.log("Unable to fetch last task");

        console.log(lastTask);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray(function (error, uncompleteTasks) {
        if (error) return console.log("Unable to fetch tasks");

        console.log(uncompleteTasks);
      });
  }
);
