const express = require("express");
const postdata = require("../Router/postShema");

const data = {
  //get all data
  async getdata(req, res) {
    try {
      const userdata = await postdata.find();
      res.send(userdata);
    } catch (err) {
      res.status(400).json({ err: "err in user data" });
    }
  },
  //get data by id

  async getdatabyid(req, res) {
    try {
      const databyid = await postdata.findById(req.params.id);
      res.send(databyid);
    } catch (err) {
      res.status(400).send({ err: "err in user data" });
    }
  },
  // post data
  async postdata(req, res) {
    try {
      console.log(req.body);
      const postSchema = await new postdata({
        Name: req.body.Name,
        Age: req.body.Age,
        Email: req.body.Email,
      });
      
      const savePoste = await postSchema.save();
      console.log(savePoste);
      res.status(200).send(savePoste);
    } catch (err) {
      res.send({ error: "something went wrong" });
    }
  },
};
module.exports = data;
