
// insert one 
exports.insertOneBook = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .insertOne(req.body);

    res.json(result);
};

// insert many
exports.insertManyBooks = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .insertMany(req.body);

    res.json(result);
};

// Update Future 
exports.updateBook = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .updateOne(
            { title: req.params.title },
            {
                $set: {
                    year: 2022
                }
            }
        );

    res.json(result);
};

// Find By Title
exports.findByTitle = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .findOne({
            title: req.query.title
        });

    res.json(result);
};

// between Years
exports.findBetweenYears = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .find({
            year: {
                $gte: Number(req.query.from),
                $lte: Number(req.query.to)
            }
        })
        .toArray();

    res.json(result);
};

// Genre
exports.findGenre = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .find({
            genres: req.query.genre
        })
        .toArray();

    res.json(result);
};

//Skip Limit Sort
exports.skipLimit = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .find()
        .sort({ year: -1 })
        .skip(2)
        .limit(3)
        .toArray();

    res.json(result);
};

// Year Integer
exports.yearInteger = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .find({
            year: {
                $type: "int"
            }
        })
        .toArray();

    res.json(result);
};

// Exclude Genres
exports.excludeGenres = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .find({
            genres: {
                $nin: [
                    "Horror",
                    "Science Fiction"
                ]
            }
        })
        .toArray();

    res.json(result);
};

// Delete Before Year
exports.deleteBeforeYear = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .deleteMany({
            year: {
                $lt: Number(req.query.year)
            }
        });

    res.json(result);
};

// Aggregate 1
exports.aggregate1 = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .aggregate([
            {
                $match: {
                    year: { $gt: 2000 }
                }
            },
            {
                $sort: {
                    year: -1
                }
            }
        ])
        .toArray();

    res.json(result);
};

// Aggregate 2
exports.aggregate2 = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .aggregate([
            {
                $match: {
                    year: { $gt: 2000 }
                }
            },
            {
                $project: {
                    _id: 0,
                    title: 1,
                    author: 1,
                    year: 1
                }
            }
        ])
        .toArray();

    res.json(result);
};

// Aggregate 3
exports.aggregate3 = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .aggregate([
            {
                $unwind: "$genres"
            }
        ])
        .toArray();

    res.json(result);
};

// Aggregate 4
exports.aggregate4 = async (req, res) => {

    const db = client.db(process.env.DB_NAME);

    const result = await db
        .collection("books")
        .aggregate([
            {
                $lookup: {
                    from: "logs",
                    localField: "title",
                    foreignField: "bookTitle",
                    as: "logs"
                }
            }
        ])
        .toArray();

    res.json(result);
};