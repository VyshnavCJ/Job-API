const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Plz provide company name "],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Plz provide company position "],
      maxlength: 50,
    },
    status: {
      type: String,
      enum: ["interview", "decline", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      required: [true, "Plz provide user"],
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
