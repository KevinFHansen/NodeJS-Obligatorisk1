import express from "express";
import bodyParser from "body-parser";
const app = express();


let users = [{
    "username":"John",
    "password":"30",
    }];


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static("public"));


import frontpageRouter from "./routers/frontpageRouter.js"
import javascriptRouter from "./routers/javascriptRouter.js"
import httpRouter from "./routers/httpRouter.js"
import nodeRouter from "./routers/nodeRouter.js";
import loginRouter from "./routers/loginRouter.js";
import adminRouter from "./routers/adminRouter.js";

app.use(frontpageRouter);
app.use(javascriptRouter);
app.use(httpRouter);
app.use(nodeRouter);
app.use(loginRouter);
app.use(adminRouter);


app.post("/login/admin", (req, res) =>  {
    console.log(users)
    const name = req.body.username;
    const pw = req.body.password;
    console.log("HERE")
    console.log(name)
    console.log(pw)
    console.log("SLUT")
    //const name = document.getElementById("inputnamesignup").value
    console.log(name)
    //const pw = document.getElementById("inputpwsignup").value
    const data = users.filter(users => users.username === name)
    console.log(data.length)
    if(data.length === 0){
        users.push({
            username: name,
            password: pw
        })

        console.log("yes")
        console.log(users)
        res.redirect("/admin")
        //window.location.reload()
        
    }
    else {
        console.log("Sorry mate")
    }
})



app.post("/login/login", (req, res) => {
    
    console.log(req.body)
    const inputName = req.body.username;
    const inputPassword = req.body.password;
    console.log("NEWSTART")
    console.log(inputName)
    console.log(inputPassword)
    console.log("NEWEND")
    // const inputName = document.getElementById("inputname").value;
    // const inputPassword = document.getElementById("inputpw").value;
    const data = users.find(user => user.username === inputName)
    if(inputName === data.username && inputPassword === data.password){
        data.isActive = true;
        res.redirect("/admin")
    }
    else {
        console.log("Sorry mate didnt match")
    }
});



const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});