const BlogPostDB = require("../models/BlogPost");

module.exports = async (req, res) => {
    const blogs = await BlogPostDB.find({}).sort({_id: -1}).populate('userid');
    res.render("blogs", {
        title: "Welcome to our blogs page for the latest articles.",
        blogs
    })
}