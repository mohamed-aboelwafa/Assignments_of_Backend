const router =
require("express").Router();

const controller =
require("./note.controller");

router.post(
    "/",
    controller.createNote
);

router.patch(
    "/:noteId",
    controller.updateNote
);

router.put(
    "/replace/:noteId",
    controller.replaceNote
);

router.patch(
    "/all",
    controller.updateAllNotes
);

router.delete(
    "/:noteId",
    controller.deleteNote
);

router.get(
    "/paginate-sort",
    controller.paginateSort
);

router.get(
    "/note-by-content",
    controller.noteByContent
);

router.get(
    "/note-with-user",
    controller.noteWithUser
);

router.get(
    "/aggregate",
    controller.aggregateNotes
);

router.delete(
    "/",
    controller.deleteAllNotes
);

router.get(
    "/:id",
    controller.getNoteById
);

module.exports = router;