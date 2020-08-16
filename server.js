var app = require("./app");
var db = require("./database");
const port = 3005;

db.connect()
  .then((success) => {
    console.log("Connected Successfully");
    app.listen(port, () => {
      console.log("Server started successfully");
    });
  })
  .catch((err) => {
    console.log("There was problem connecting to database");
  });
