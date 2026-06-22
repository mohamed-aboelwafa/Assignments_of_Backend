const User =
require("../../DB/models/user.model");

exports.signup = async (data) => {

    const emailExists =
    await User.findOne({
        email: data.email
    });

    if (emailExists) {

        return {
            message:
            "Email already exists"
        };
    }

    return await User.create(data);
};

exports.login = async (data) => {

    return await User.findOne({
        email: data.email,
        password: data.password
    });
};

exports.updateUser =
async (userId, data) => {

    delete data.password;

    if (data.email) {

        const emailExists =
        await User.findOne({

            email: data.email,

            _id: {
                $ne: userId
            }
        });

        if (emailExists) {

            return {
                message:
                "Email already exists"
            };
        }
    }

    return await User.findByIdAndUpdate(
        userId,
        data,
        { new: true }
    );
};

exports.deleteUser =
async (userId) => {

    return await User.findByIdAndDelete(
        userId
    );
};

exports.getUser =
async (userId) => {

    return await User.findById(userId);
};