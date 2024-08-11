const { pk } = require("./func");
const request = require("supertest");
const app = require("../app");
// test("hello", () => {});
// test("hello", () => {
//   throw new Error("sdbjhn");
// });

// test("should add two num", (done) => {
//   pk(3, 5).then((sum) => {
//     expect(sum).tobe(8);
//     done();
//   });
// });

test("async calls", async () => {
  const sum = await pk(2, 4);
  expect(sum).toBe(6);
});

test("should signup", async () => {
  await request(app)
    .post("/registration")
    .send({ email: "rfrf", password: "fwecpkl", name: "EDwe" })
    .expect(200);
});