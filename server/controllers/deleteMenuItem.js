const deleteMenuItemDB = require("../models/MenuItems");

module.exports = async (req, res) => {
    await deleteMenuItemDB.findOneAndDelete(req.params.id)
    res.redirect('/newMenuItem');
}