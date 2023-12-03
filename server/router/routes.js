const express = require("express");
const router = express.Router();
const cache = require("../config/cachePages");

const homeController = require("../controllers/homePage");
const sendSubscriptionController = require("../controllers/subscriptionForm");
const contactController = require("../controllers/contactPage");
const sendContactController = require("../controllers/sendContactForm");
// users
const registerController = require("../controllers/registerPage");
const storeUserController = require("../controllers/storeUser");
const loginController = require("../controllers/loginPage");
const loginUserController = require("../controllers/loginUser");
const logoutController = require("../controllers/logoutUser");
// blogs
const newPostController = require("../controllers/newPostPage");
const storePostController = require("../controllers/storePost");
const blogsController = require("../controllers/blogsPage");
const postController = require("../controllers/postPage");
const deletePostController = require("../controllers/deletePost");
// menu
const newMenuItemController = require("../controllers/newMenuItemPage");
const storeMenuItemController = require("../controllers/storeMenuItem");
const menuItemsController = require("../controllers/menuItemsPage");
const menuItemController = require("../controllers/singleMenuItemPage");
const updateMenuItemController = require("../controllers/updateMenuItem");
const deleteMenuItemController = require("../controllers/deleteMenuItem");

// middlewares
const loggedIn = require("../middleware/ifLoggedIn");
const auth = require("../middleware/ifAuthorized");

router.get("/", cache(2), homeController);
router.post("/send/subscription", sendSubscriptionController);
router.get("/contact", contactController);
router.post("/send/form", sendContactController);
// user
router.get("/register", loggedIn, registerController);
router.post("/store/user", storeUserController);
router.get("/login", loggedIn, loginController);
router.post("/login/user", loginUserController);
router.get("/logout", logoutController);
// blogs
router.get("/newPost", auth, newPostController);
router.post("/store/post", storePostController);
router.get("/blogs", cache(2), blogsController);
router.get("/post/:id", cache(2), postController);
router.get("/delete/post/:id", auth, deletePostController);
// menu
router.get("/newMenuItem", auth, newMenuItemController);
router.post("/store/menu", storeMenuItemController);
router.get("/menu", cache(2), menuItemsController);
router.get("/singleMenu/:id", cache(2), menuItemController);
router.put("/update/menu/:id", updateMenuItemController);
router.delete("/delete/menu/:id", auth, deleteMenuItemController);

module.exports = router;