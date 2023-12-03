const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuSchema = new Schema ({
    title: String,
    image: {
        type: String,
        required: true
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    details: String,
    ingredients: Array,
    datePosted: {
        type: Date,
        default: new Date()
    }
})

const Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu;