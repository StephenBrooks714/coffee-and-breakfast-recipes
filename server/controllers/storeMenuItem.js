const StoreMenuItem = require("../models/MenuItems");
const path = require("path");

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', '..', 'public/uploads', image.name), async (error) => {
        await StoreMenuItem.create({
            ...req.body,
            image: '/uploads/' + image.name,
            userid: req.session.userId
        })
        console.log(error);
        res.redirect('/menu')
    })
}