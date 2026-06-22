const noteService =
require("./note.service");

exports.createNote =
async (req, res) => {

    const result =
    await noteService.createNote(
        req.body
    );

    res.json(result);
};

exports.updateNote =
async (req, res) => {

    const result =
    await noteService.updateNote(

        req.params.noteId,

        req.body.userId,

        req.body
    );

    res.json(result);
};

exports.replaceNote =
async (req, res) => {

    const result =
    await noteService.replaceNote(

        req.params.noteId,

        req.body.userId,

        req.body
    );

    res.json(result);
};

exports.updateAllNotes =
async (req, res) => {

    const result =
    await noteService.updateAllNotes(

        req.body.userId,

        req.body.title
    );

    res.json(result);
};

exports.deleteNote =
async (req, res) => {

    const result =
    await noteService.deleteNote(

        req.params.noteId,

        req.body.userId
    );

    res.json(result);
};

exports.paginateSort =
async (req, res) => {

    const result =
    await noteService.paginateSort(

        req.query.userId,

        req.query.page,

        req.query.limit
    );

    res.json(result);
};

exports.getNoteById =
async (req, res) => {

    const result =
    await noteService.getNoteById(

        req.params.id,

        req.query.userId
    );

    res.json(result);
};

exports.noteByContent =
async (req, res) => {

    const result =
    await noteService.noteByContent(

        req.query.content,

        req.query.userId
    );

    res.json(result);
};

exports.noteWithUser =
async (req, res) => {

    const result =
    await noteService.noteWithUser(

        req.query.userId
    );

    res.json(result);
};

exports.aggregateNotes =
async (req, res) => {

    const result =
    await noteService.aggregateNotes(

        req.query.userId,

        req.query.title
    );

    res.json(result);
};

exports.deleteAllNotes =
async (req, res) => {

    const result =
    await noteService.deleteAllNotes(

        req.body.userId
    );

    res.json(result);
};