const { MongoClient, ObjectID, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return console.log("Unable to connect to database");

    const db = client.db(databaseName);

    db.collection("users")
      .updateOne(
        {
          _id: ObjectId("63024c0f77e06fe48f86f3d9"),
        },
        {
          $inc: {
            age: 1,
          },
        }
      )
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
);
