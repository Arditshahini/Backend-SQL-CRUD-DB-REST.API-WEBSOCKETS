const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');

router.get("/search", async (req, res) => {

    console.log(req.query);
    
    await controller.search(req, res);
});

module.exports = router;