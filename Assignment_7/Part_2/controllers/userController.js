const User = require("../models/User");

// ======================================================
// Signup
// ======================================================

const signup = async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            role
        } = req.body;

        const existingUser = await User.findOne({
            where: { email }
        });

        if (existingUser) {
            return res.json({
                message: "Email already exists."
            });
        }

        const user = User.build({
            name,
            email,
            password,
            role
        });

        await user.save();

        res.json({
            message: "User added successfully."
        });

    } catch (err) {

        res.json(err);

    }

};

// ======================================================
// Update Or Create
// ======================================================

const updateUser = async (req, res) => {

    try {

        const id = req.params.id;

        const {
            name,
            email,
            password,
            role
        } = req.body;

        await User.upsert({
            id,
            name,
            email,
            password,
            role
        }, {
            validate: false
        });

        res.json({
            message: "User created or updated successfully"
        });

    } catch (err) {

        res.json(err);

    }

};

// ======================================================
// Get User By Email
// ======================================================

const getUserByEmail = async (req, res) => {

    try {

        const { email } = req.query;

        const user = await User.findOne({
            where: { email }
        });

        if (!user) {

            return res.json({
                message: "no user found"
            });

        }

        res.json({
            user
        });

    } catch (err) {

        res.json(err);

    }

};

// ======================================================
// Get User By PK
// ======================================================

const getUserById = async (req, res) => {

    try {

        const id = req.params.id;

        const user = await User.findByPk(id, {

            attributes: {
                exclude: ["role"]
            }

        });

        if (!user) {

            return res.json({
                message: "no user found"
            });

        }

        res.json(user);

    } catch (err) {

        res.json(err);

    }

};

module.exports = {
    signup,
    updateUser,
    getUserByEmail,
    getUserById
};