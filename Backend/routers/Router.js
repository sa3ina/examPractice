const express = require("express");
const Controller = require("../controllers/Controller");
const router = express.Router();
router.get("/products", Controller.getall);
router.get("/products/:id", Controller.getById);
router.delete("/products/:id", Controller.deleteOne);
router.post("/products", Controller.postNew);

module.exports = router;
