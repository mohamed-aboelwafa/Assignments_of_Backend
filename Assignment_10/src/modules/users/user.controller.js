const userService =
require("./user.service");

exports.signup =
async (req, res) => {

    const result =
    await userService.signup(
        req.body
    );

    res.json(result);
};

exports.login =
async (req, res) => {

    const result =
    await userService.login(
        req.body
    );

    res.json(result);
};

exports.updateUser =
async (req, res) => {

    const result =
    await userService.updateUser(
        req.body.userId,
        req.body
    );

    res.json(result);
};

exports.deleteUser =
async (req, res) => {

    const result =
    await userService.deleteUser(
        req.body.userId
    );

    res.json(result);
};

exports.getUser =
async (req, res) => {

    const result =
    await userService.getUser(
        req.query.userId
    );

    res.json(result);
};