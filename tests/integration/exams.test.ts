import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { clearDatabase } from "../utils/database";
import { examBody } from "../factories/examFactory";

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await clearDatabase();
});

afterAll(async () => {
    await getConnection().close();
});

describe("POST /upload", () => {
    it("should answer 400 for invalid name param", async () => {
        let body = await examBody();
        body.name = "";

        const response = await supertest(app).post("/upload").send(body);
        expect(response.status).toEqual(400);
    });
});
