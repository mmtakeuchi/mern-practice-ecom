const { Router } = require("express");
const itemsController = require("../controllers/itemsController");
const router = Router();

router.get("/items", itemsController.get_items);
router.post("/items", itemsController.post_items);
router.put("/items/:id", itemsController.update_items);
router.delete("/items/:id", itemsController.delete_items);

module.exports = router;
