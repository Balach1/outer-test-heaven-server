const { expect } = require("@jest/globals");
const request = require("supertest");
const app = require("../src/app");

describe("Test the root path & If Hello world is being returned", () => {
    test("It should response the GET method", async () => {
      const response = await request(app).get("/");
      const response2 = await request(app).get("/t");

      expect(response.statusCode).toBe(200);
      expect(response.text).toBe("Hello World!");
      expect(response2.text).toBe("Hello World!2");
    });
  });