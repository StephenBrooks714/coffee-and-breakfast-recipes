// database
const MenuItemDB = require('../models/MenuItems')

module.exports = async (req, res) => {
    const menu = await MenuItemDB.findById(req.params.id).populate('userid');
    res.render("singleMenu", {
        title: "Menu post data for more details about the food and drinks.",
        menu
    })
}