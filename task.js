const express = require("express");
const mongoose = require("mongoose");

let app = express();

async function connect() {
    let connection = await mongoose.connect("mongodb://0.0.0.0:27017/Students");
    if (!connection) {
        console.log("noo");
    } else {
        console.log("good");
    }
}
connect();
const StudentsSchema = new mongoose.Schema({
    name: String,
    id: Number,
    age: Number,
    phone: String,
    Email: String,
    address: String,
});

let Studentsmodel = new mongoose.model("Students", StudentsSchema);

const coursesSchema = new mongoose.Schema({
    coursesname: String,
    price: Number,
    numberofparticipants: String,
});

let coursesmodel = new mongoose.model("courses", coursesSchema);

let newuser = new Studentsmodel({
    name: "zain ashraf",
    id: "124501",
    age: "21",
    phone: "01275992765",
    Email: "zain007@gmail.com",
    address: "Hurghada",
}).save();

let AhmedUser = new Studentsmodel({
    name: "ali ebrahem",
    id: "124502",
    age: "22",
    phone: "01096584467",
    Email: "aliebrahem9666@gmail.com",
    address: "Zagazig",

}).save();

let MohamedElsayed = new Studentsmodel({
    name: "ahmed salah",
    id: "124503",
    age: "23",
    phone: "01155894229",
    Email: "ahmedsalah584@gmail.com",
    address: "ismalia",
}).save();

let Newunser = new coursesmodel({
    name: "IT",
    price: "600",
    numberofparticipants: "1122",
}).save();

let it = new coursesmodel({
    name: "frontend",
    price: "400",
    numberofparticipants: "1121",
}).save();

let Newuser = new coursesmodel({
    name: "network",
    price: "300",
    numberofparticipants: "1120",
}).save();

app.get("/Students", async(req, res) => {
    let allStudents = await Studentsmodel.find();
    res.status(200);
    console.log(allStudents.length);
    res.json(allStudents);
});

app.get("/Courses", async(req, res) => {
    let allCourses = await coursesmodel.find();
    res.status(200);
    console.log(allCourses.length);
    res.json(allCourses);
});

app.listen(3000, function() {
    console.log("server now is opend");
});