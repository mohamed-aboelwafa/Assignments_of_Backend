const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,

        validate: {
            validator(value) {

                return value !== value.toUpperCase();
            },

            message:
            "Title cannot be uppercase"
        }
    },

    content: {
        type: String,
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, {
    timestamps: true
});

module.exports =
mongoose.model("Note", noteSchema);