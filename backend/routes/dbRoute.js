import express from "express";
import Crop from "../models/crop.js";


const router = express.Router();

router.get("/", async(req, res) =>{
    try {
        const crops = await Crop.find();
        res.json(crops);
    } catch (error) {
        res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const crop = new Crop({
      plantname: req.body.plantname,
      fertilizername: req.body.fertilizername,
      fertilizertype: req.body.fertilizertype,
      fertilizermethod: req.body.fertilizermethod,
      planttype: req.body.planttype,
      fertilizerquantity: req.body.fertilizerquantity,
    });
    const saveItem = await crop.save();
    console.log(saveItem);
    res.json(saveItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;