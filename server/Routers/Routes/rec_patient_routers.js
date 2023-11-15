const router = require("express").Router();
const mySQLConnection = require("../../DB/mySQL/mySQLConnection")();

//  query routes
router.route("/getdoctorwisecurrentdayoplist").post(async (req, res) => {
  try {
    const sqlQuery =
      "select a.`display_number`,a.`name`,b.`pat_id`,b.`dob`,b.`gname1`,b.`sex`,c.`token_no_doctor`,c.`datetime`,c.`doctor_id` from `rec_patient` a, `rec_patient_details` b,`rec_patient_opvisits` c where a.`id`=b.`pat_id` and b.`pat_id` = c.`pat_id` AND c.`date`=CURRENT_DATE and a.`is_cardin_rack`=0 and a.`is_in_op`=1 and c.`doctor_id`=?";
    mySQLConnection.query(sqlQuery,[req.body.id], (err, data) => {
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
router.route("/getdepartmentwisecurrentdayoplist").post(async (req, res) => {
  try {
    const sqlQuery =
      "SELECT a.`display_number`,a.`name`,b.`pat_id`,b.`dob`,b.`gname1`,b.`sex`,c.`token_no_doctor`,c.`datetime`,c.`doctor_id` FROM `rec_patient` a, `rec_patient_details` b,`rec_patient_opvisits` c WHERE a.`id`=b.`pat_id` AND b.`pat_id` = c.`pat_id` AND c.`date`=CURRENT_DATE AND a.`is_cardin_rack`=0 AND a.`is_in_op`=1  AND c.`service_id`=?";
    mySQLConnection.query(sqlQuery,[req.body.id], (err, data) => {
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
