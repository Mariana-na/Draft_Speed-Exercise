const router = require("express").Router();
const phonesData = require("../data/phones.json");

//-------------------------DISPLAY ALL PHONES--------------------

router.get("/phones", (req, res) => {
  try {
    res.json(phonesData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//-----------------------DISPLAY A PHONE'S DETAILS-----------------

router.get("/phones/:id", (req, res) => {
  try {
    const phoneId = req.params.id;
    const phone = phonesData.find(phone => phone.id === phoneId);

    res.json(phone);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
})

module.exports = router;
