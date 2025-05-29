require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT;

try {
  (async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected :)) ");
  })();
} catch {
  console.log("MongoDB is not Connect!!");
}

app.listen(port, () => {
  console.log(`Server Runing On Port ${port}`);
});
