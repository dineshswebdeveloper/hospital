const router = require("express").Router();
const { adminUsersModel } = require("../../DB/models");
const mySQLConnection = require("../../DB/mySQL/mySQLConnection")();

const bcrypt = require("bcrypt");
//  user routes
const session = {};
router.route("/usercreate").post(async (req, res) => {
  try {
    const currUser = req.body;
    const oldUser = await adminUsersModel.findOne({
      username: currUser.username,
    });
    if (!oldUser) {
      const hash = await bcrypt.hash(currUser.password, 10);
      await adminUsersModel.create({
        name: currUser.name,
        username: currUser.username,
        password: hash,
        is_doctor: currUser.is_doctor,
        doctor_id: currUser.doctor_id,
        gender: currUser.gender,
      });
      return res.json({ status: "user created" });
    } else {
      return res.json({ status: "username already exist" });
    }
  } catch (error) {
    console.log(`error in userCreate :${error.message}`);
  }
});
router.route("/userlogin").post(async (req, res) => {
  try {
    const currUser = req.body;

    const oldUser = await adminUsersModel.findOne({
      username: currUser.username.toLowerCase(),
    });
    if (oldUser) {
      const hash = await bcrypt.compare(currUser.password, oldUser.password);
      if (hash) {
        return res.json({
          status: "user logined",
          oldUser: {
            name: oldUser.name,
            username: oldUser.username,
            user_type: oldUser.user_type,
            is_doctor: oldUser.is_doctor,
            doctor_id: oldUser.doctor_id,
            is_blocked: oldUser.is_blocked,
            gender: oldUser.gender,
            id: oldUser._id,
          },
        });
      } else {
        return res.json({ status: "password does not match" });
      }
    } else {
      return res.json({ status: "username does not match" });
    }
  } catch (error) {
    console.log(`error in userLogin :${error.message}`);
  }
});
router.route("/getdoctorlist").get(async (req, res) => {
  try {
    const sqlQuery =
      "SELECT id,NAME,uid,details,dept_id FROM `rec_config_msc_consultants` WHERE is_active ='1';";
      mySQLConnection.query(sqlQuery, (err, data) => {
      if (err) {
      
        return res.json({ status: err.message });
      }
      if (data.length > 0) {
        return res.json({ status: "success", data });
      } else {
        return res.json({ status: "failure" });
      }
    });
  } catch (error) {
    console.log(`error in userCreate :${error.message}`);
  }
});
router.route("/getdepartmentlist").get(async (req, res) => {
  try {
    const sqlQuery =
      "SELECT id,NAME FROM `rec_config_msc_departments` WHERE is_active=1;";
      mySQLConnection.query(sqlQuery, (err, data) => {
      if (err) {
        return res.json({ status: err.message });
      }
      if (data.length > 0) {
        return res.json({ status: "success", data });
      } else {
        return res.json({ status: "failure" });
      }
    });
  } catch (error) {
    console.log(`error in userCreate :${error.message}`);
  }
});
// Exports Area
module.exports = router;
