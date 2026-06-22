const mongoose = require("mongoose");

const Note =
require("../../DB/models/note.model");

exports.createNote = async (data) => {

    return await Note.create(data);
};

exports.updateNote = async (
    noteId,
    userId,
    data
) => {

    return await Note.findOneAndUpdate(

        {
            _id: noteId,
            userId
        },

        data,

        {
            new: true
        }
    );
};

exports.replaceNote = async (
    noteId,
    userId,
    data
) => {

    return await Note.findOneAndReplace(

        {
            _id: noteId,
            userId
        },

        data,

        {
            new: true
        }
    );
};

exports.updateAllNotes =
async (
    userId,
    title
) => {

    return await Note.updateMany(

        {
            userId
        },

        {
            $set: {
                title
            }
        }
    );
};

exports.deleteNote = async (
    noteId,
    userId
) => {

    return await Note.findOneAndDelete({

        _id: noteId,

        userId
    });
};

exports.paginateSort = async (
    userId,
    page,
    limit
) => {

    return await Note.find({

        userId

    })

    .sort({
        createdAt: -1
    })

    .skip((page - 1) * limit)

    .limit(limit);
};

exports.getNoteById = async (
    noteId,
    userId
) => {

    return await Note.findOne({

        _id: noteId,

        userId
    });
};

exports.noteByContent =
async (
    content,
    userId
) => {

    return await Note.findOne({

        content,

        userId
    });
};

exports.noteWithUser =
async (userId) => {

    return await Note.find({

        userId

    })

    .select(
        "title userId createdAt"
    )

    .populate({

        path: "userId",

        select: "email"
    });
};

exports.aggregateNotes =
async (
    userId,
    title
) => {

    return await Note.aggregate([

        {
            $match: {

                userId:
                new mongoose.Types.ObjectId(
                    userId
                ),

                title
            }
        },

        {
            $lookup: {

                from: "users",

                localField:
                "userId",

                foreignField:
                "_id",

                as: "user"
            }
        },

        {
            $project: {

                title: 1,

                content: 1,

                "user.name": 1,

                "user.email": 1
            }
        }
    ]);
};

exports.deleteAllNotes =
async (userId) => {

    return await Note.deleteMany({

        userId
    });
};