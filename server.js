var app = require("./app");
var database = require("./database");
const port = 3001;

database
  .connect()
  .then((success) => {
    console.log("Connected Successfully");
    app.listen(port, () => {
      console.log("Server started successfully");
    });
  })
  .catch((err) => {
    console.log("There was problem connecting to database");
  });
