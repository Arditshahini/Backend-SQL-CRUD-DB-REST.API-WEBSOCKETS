const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');

router.get("/all", async (req, res) => {

    await controller.get(req, res);
});

router.get("/search", async (req, res) => {

    console.log(req.query);

    await controller.search(req, res);
});

router.post("/add", async (req, res) => {

    await controller.add(req, res);
});

router.put("/edit", async (req, res) => {

    console.log(req.body);

    await controller.edit(req, res);
});

router.delete("/remove", async (req, res) => {

    await controller.remove(req, res)

    res.sendStatus(200);
});

module.exports = router;
