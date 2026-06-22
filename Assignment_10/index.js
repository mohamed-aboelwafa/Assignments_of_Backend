require("dotenv").config({

    path:
    "./src/config/dev.env"
});

const express =
require("express");

const connectDB =
require("./src/DB/connection");

const initApp =
require("./src/app.controller");

const app = express();

connectDB();

initApp(
    app,
    express
);

app.listen(
    process.env.PORT,
    () => {

        console.log(
            `Server Running On Port ${process.env.PORT}`
        );
    }
);