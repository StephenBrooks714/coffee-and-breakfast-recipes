const MenuItemsDB = require("../models/MenuItems");

module.exports = async (req, res) => {
    const menu = await MenuItemsDB.find({}).sort({_id: -1}).populate('userid');
    res.render("menu", {
        title: "Here you will see my latest projects by reference type.",
        menu
    })
}