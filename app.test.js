const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test endpoint",() => {
    test("Deve devolver 'Books'", async () => {
        const response =  await request.get("/books")
        const body = JSON.parse(response.text);
        expect(response.status).toBe(200);
        expect ( body.message).toBe("Books");
    })
    test("DEve devolver 'Authors'", async() => {
        const response = await request.get("/authors")
        const body = JSON.parse(response.text);
        expect(response.status).toBe(200);
        expect(body.message).toBe("Authors");
    })
    test("Debe devolver error", async () => {
        const response = await request.get("/any-route")
        const body = JSON.parse(response.text);
        expect(response.status).toBe(404);
        expect(body.message).toBe("Incorrect route or params");
    })
})