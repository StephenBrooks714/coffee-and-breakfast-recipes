const BlogPostDB = require("../models/BlogPost");
const MenuItemsDB = require("../models/MenuItems");

module.exports = async (req, res) => {
    const blogs = await BlogPostDB.find({}).limit(3).sort({_id: -1}).populate('userid');
    const menu = await MenuItemsDB.find({}).limit(4).sort({_id: -1}).populate('userid');
    res.render("index", {
        title: "Your coding experience and learning begins here.",
        blogs, menu
    })
}