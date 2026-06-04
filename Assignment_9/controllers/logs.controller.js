const { client } = require("../config/db");

exports.insertLog = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("logs")
        .insertOne(req.body);

    res.json(result);
};