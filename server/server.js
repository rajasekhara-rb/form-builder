import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
import dotenv from "dotenv";
import formRouter from "./routes/formRouter.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5050;

app.use("/form", formRouter);

const connectToMongoDb = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // console.log("done");
    mongoose.connection.on("connected", () => {
        console.log("MongoDB connection established on : " + conn.connection.host);
    })

    mongoose.connection.on("error", () => {
        console.log("MongoDB connection Failed")
    })
}

connectToMongoDb();

app.listen(PORT, () => {
    console.log("Server started on PORT : " + PORT);
});

app.get("/", (req,res)=>{
    res.status(200).json({
        message: "Server is Live",
        view_api_documentaton: "Avilable soon",
        // access_required: "Access is required to use this api.",
        // api_link: "https://foodie-api-ntw5.onrender.com",
        // website_link: "https://foodie-food-ordering-app.netlify.app/",
        api_author: "Budda Rajasekhara Reddy",
    })
});



