const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    id: Number,
    JobTitle: String,
    label: String,
    companyName: String,
    companyLocation: String,
    attribute_snippet: String,
    category_1: String,
    category_2: String,
    ialbl: String,
    job_snippet: String,
    date: String,
    visually_hidden: String,
    date_2: String,
    date_3: String,
    hiringMultipleCandidatesCaption: String,
    job_snippet_2: String,
    job_snippet_3: String,
    urgentlyHiring: String,
    shelfItem: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = Job = mongoose.model("job", jobSchema);
