const express = require("express");
const router = express.Router();

const controllers_page=require('../controllers/api.controllers');

router.post("/sell",controllers_page.senddetails);
router.post("/buy",controllers_page.fetchItems)

module.exports=router;