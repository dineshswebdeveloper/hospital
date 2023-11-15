
const DBConnection = require("./DB/DBConnection");
const app = require('./Routers/app');
const PORT = 4000;
// server listening 
app.listen(PORT, (err) => {
  DBConnection();
  err
    ? console.log(`listening Err message : ${err.message}`)
    : console.log(`Node server is running on port ${PORT}`);
});
