const express = require("express");
const userModels = require("../models/userSchema");

const router = express.Router();

// Register user
router.post("/register", async (req, res) => {
  const { user, DOB, mothername, IP, fullname, hobbies, product, state, city, postalcode } = req.body;
  console.log(req.body);

  if (!user || !DOB || !mothername || !IP || !fullname || !hobbies || !product || !state || !city || !postalcode) {
    return res.status(400).json({ success: false, message: "Please fill all fields" });
  }

  try {
    const getUser = await userModels.findOne({ DOB: DOB });

    if (getUser) {
      return res.status(409).json({ success: false, message: "This user is already present" });
    }

    const addnewUser = new userModels({
      user, DOB, mothername, IP, fullname, hobbies, product, state, city, postalcode
    });

    await addnewUser.save();

    res.status(201).json({ success: true, message: "Data added successfully", data: addnewUser });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get all users
router.get("/getuserdata", async (req, res) => {
  try {
    const getUsers = await userModels.find();
    res.status(200).json({ success: true, message: "User data retrieved successfully", data: getUsers });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get individual user
router.get("/getuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const individualData = await userModels.findById(id);

    if (!individualData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: individualData });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update user
router.put("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateUserdata = await userModels.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json({ success: true, message: "User data updated", data: updateUserdata });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Delete user
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await userModels.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "User data deleted", data: deleteUser });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
