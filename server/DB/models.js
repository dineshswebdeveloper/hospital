const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");


// Schema and Model Area
const adminUsersSchema = new Schema({
  name: { type: String, required: true},
  username: { type: String, required: true},
  password: { type: String, required: true},
  user_type: { type: String, required: true, default:"user"},
  is_doctor: { type: Boolean, required: true, default: false },
  doctor_id: { type: Number, required: true },
  is_blocked: { type: Boolean, required: true, default: false },
  gender: { type: String, required: true},
  create_at: { type: Date, required: true, default: Date.now }
});
const adminUsersModel = model('adminusers',adminUsersSchema)



// Export Area
module.exports = {adminUsersModel}