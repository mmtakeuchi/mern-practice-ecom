const { Router } = require("express");
const cartController = require("../controllers/cartController");
const router = Router();

router.get("/cart/:id", cartController.get_cart_items);
router.psot("/cart/:id", cartController.add_cart_item);
router.delete("/cart/:userId/:id", cartController.delete_item);

module.exports = router;
