const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

const userOne = {
  name: "mike",
  email: "mike@example.com",
  password: "56what!!",
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("should signup an new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Salah",
      email: "salahcst344@gmail.com",
      password: "MyPass777!",
    })
    .expect(201);
});

test("should login existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
});

test("should not login nonexistent user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "yassin@gmail.com",
      password: "1235495",
    })
    .expect(400);
});
