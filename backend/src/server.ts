import mongoose from "mongoose";
import app from './app'
import env from './util/validateEnv'

const port = env.PORT

mongoose.connect(env.MONGO_CONNECTION_STRING).then(() => {
  console.log("Mognoose conenctd");
  app.listen(port, () => {
    console.log("Server running on port 5000");
  });
}).catch(console.error)
