import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import riderRoutes from "./routes/riderRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/add_product", productRoutes);
app.use("/orders", orderRoutes);
app.use("/customers", customerRoutes);
app.use("/riders", riderRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose.connect(

  "mongodb+srv://sakeenamanzoor300107_db_user:sakeena12345@cluster0.fenqeqd.mongodb.net/my-app"
).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

export default app;
