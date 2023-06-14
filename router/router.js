const { Router } = require("express");
const {
  rutaGet,
  rutaPut,
  rutaPost,
  rutaDelete,
} = require("../controller/controller");

const router = Router();

router.get("/get", rutaGet);

router.post("/Post", rutaPost);

router.put("/Put", rutaPut);

router.delete("/delete", rutaDelete);

module.exports = router;
