const { client } = require("../config/db");

exports.createBooksCollection = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db.createCollection("books", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["title"],
                properties: {
                    title: {
                        bsonType: "string",
                        minLength: 1
                    }
                }
            }
        }
    });

    res.json(result);
};

exports.createAuthorsCollection = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("authors")
        .insertOne({
            name: "George Orwell"
        });

    res.json(result);
};

exports.createLogsCollection = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db.createCollection("logs", {
        capped: true,
        size: 1024 * 1024
    });

    res.json(result);
};

exports.createBooksIndex = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .createIndex({ title: 1 });

    res.json(result);
};