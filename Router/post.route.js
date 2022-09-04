const router = require("express").Router();
const data = require("../server/post,server")
const postdata = require("../Router/postShema");


router.get("/",data.getdata);
router.get("/:id",data.getdatabyid);
router.post("/",data.postdata);




module.exports = router;
