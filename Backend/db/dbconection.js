import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

async function dbconection() {
  try {
    await mongoose.connect(
      "mongodb+srv://ishfaqpstore_db_user:Ishfaq12345@cluster0.gbapjwb.mongodb.net/s-o?appName=Cluster0",
    );
    console.log("This is db connect");
  } catch (error) {
    console.log("This is db error:", error.message);
  }
}

export default dbconection;
