const {
    userRouter,
    noteRouter
} = require("./modules");

const initApp =
(app, express) => {

    app.use(express.json());

    app.use(
        "/users",
        userRouter
    );

    app.use(
        "/notes",
        noteRouter
    );
};

module.exports =
initApp;