const { Router } = require("express");
const ordeeController = requrie("../controllers/orderController.js");
const router = Router();

router.get("/order/:id", ordeeController.get_order);
router.post("/order/:id", ordeeController.checkout);

module.exports = router;
