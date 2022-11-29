const express = require("express");

const Job = require("./job.model");

const app = express.Router();

app.get("/", async (req, res) => {
  const { what, where, q, page, limit } = req.query;
  try {
    if (what && where) {
      let temp = new RegExp(what, "i");
      let temp2 = new RegExp(where, "i");
      let jobs = await Job.find({
        $and: [{ JobTitle: temp }, { companyLocation: temp2 }],
      })
        .limit(limit)
        .skip((page - 1) * limit);
      res.send(jobs);
    } else if (what) {
      let temp = new RegExp(what, "i");
      let jobs = await Job.find({ JobTitle: temp })
        .limit(limit)
        .skip((page - 1) * limit);
      res.send(jobs);
    } else if (where) {
        console.log({where})
      let temp2 = new RegExp(where, "i");
      let jobs = await Job.find({ companyLocation: temp2 })
        .limit(limit)
        .skip((page - 1) * limit);
      res.send(jobs);
    } else if (q) {
      let temp = new RegExp(q, "i");
      let jobs = await Job.find({
        $or: [
          { category_1: temp },
          { category_2: temp },
          { label: temp },
          { date: temp },
          { urgentlyHiring: temp },
          { date_3: temp },
          { ialbl: temp },
        ],
      })
        .limit(limit)
        .skip((page - 1) * limit);
      res.send(jobs);
    } else {
      let jobs = await Job.find()
        .limit(limit)
        .skip((page - 1) * limit);
      res.send(jobs);
    }
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = app;
