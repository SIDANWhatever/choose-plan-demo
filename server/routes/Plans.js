const express = require("express");
const router = express.Router();
const { Plans } = require("../models");

router.get("/", async (req, res) => {
    const listOfPlans = await Plans.findAll();
    res.json(listOfPlans);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const plan = await Plans.findByPk(id);
    res.json(plan);
});

router.post("/", async (req, res) => {
    const plan = req.body;
    await Plans.create(plan);
    res.json(plan);
});

module.exports = router;