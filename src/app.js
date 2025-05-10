import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";
//dotEnv config
dotenv.config();

//create a new express app
const app = express();

//Morgan
if(process.env.NODE_ENV !== "production"){
    app.use(morgan("dev"));
}

//helmet
app.use(helmet());

//Parse JSON request body
app.use(express.json());

//Parse URL-encoded request body
app.use(express.urlencoded({extended:true}));

//sanitize request data
app.use(mongoSanitize());

//Enable Cookie Parser
app.use(cookieParser());

//gzip compression
app.use(compression());

//file upload
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}));

//cors
app.use(cors());



app.post("/test",(req,res)=>{
    res.send(req.body);
});

export default app;