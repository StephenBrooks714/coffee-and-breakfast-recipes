// database
const deletePostDB = require('../models/BlogPost')

module.exports = async (req, res) => {
    await deletePostDB.findByIdAndDelete(req.params.id)
    res.redirect('/newPost')
}