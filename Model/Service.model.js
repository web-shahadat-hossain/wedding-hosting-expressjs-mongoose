const { default: mongoose } = require("mongoose");

const servicesSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please Provide Services Name"],
  },
  space: {
    type: Number,
    required: true,
  },
  food: {
    type: String,
    required: true,
    enum: ["Low Food", "High Food", "All Food"],
  },
  budget: {
    type: Number,
    required: true,
  },
});

// model

const Service = mongoose.model("Service", servicesSchema);

module.exports = Service;
