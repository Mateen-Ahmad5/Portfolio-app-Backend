import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    description: { type: String, required: true },
  },
);
  
  export default mongoose.model("Experience", experienceSchema);