const { expect } = require("@jest/globals");
const request = require("supertest");
const app = require("../app");

describe("Test the root path & If Hello world is being returned", () => {
    test("It should response the GET method", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe("Hello World!");
    });
  });