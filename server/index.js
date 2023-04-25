import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mysql from "mysql";

dotenv.config();

const app = express();
const  PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"mangaten" 
});

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost/${PORT}/`);
});

app.get("/", (req,res)=>{
  res.send("Hello");
});

// Route to get all books
app.get("/books", (req,res)=>{
  db.query("SELECT * FROM books", (err,result)=>{
    if(err) {
      console.log(err)
    } 
    res.send(result)
  });   
});

app.get("/categories", (req,res)=>{
  db.query("SELECT * FROM categories", (err,result)=>{
    if(err) {
      console.log(err)
    } 
    res.send(result)
  });   
});