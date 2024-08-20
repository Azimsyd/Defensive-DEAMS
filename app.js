const express = require("express");
const app = express();
// const ejs = require("ejs")
const path = require("path")
const port = process.env.PORT || 3000;
require("./src/db/connect")
const Registeration = require('./src/models/registers');
const exp = require("constants");

// console.log(path.json(__dirname))
// const static_path = path.json(__dirname)
// app.use(express.static(static_path))

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/public', express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './templates/views'))
console.log(path.join(__dirname, './templates/views'))
// ejs.registerParsials(path.join(__dirname, './templates/partials'))

app.get('/', (req, res)=>{
    res.render("home");
});

app.get('/about', (req, res)=>{
    res.render("about");
});
app.get('/registration', (req, res)=>{
    res.render("registration");
});

// create a new user in our db
app.post('/registration', async (req, res)=>{
    try {
        const EmployDetail = new Registeration({
            fname:req.body.fname,
            femail:req.body.femail,
            fphone:req.body.fphone,
            fpass:req.body.fpass,
            fcpass:req.body.fcpass
        })
        const registrered = await EmployDetail.save()
        res.status(200).render('home')
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/login', (req, res)=>{
    res.render("login");
});

app.post('/login', async (req, res)=>{
    try {
        const lemail = req.body.lemail
        // const phone = req.body.phone
        const password = req.body.password
        // console.log(`${lemail} and ${password}`)
        if (await Registeration.findOne({femail:lemail}, {fpass:password})) {
            res.status(200).render('home')
        } else {
            res.send('Invalid login')
        }


    } catch (error) {
        res.status(400).send('Invalid login Details')
    }
});

app.get('/', (req, res)=>{
    res.send("Opps thair is some error in page");
});

app.listen(port,()=>{
    console.log(`server is running... ${port}`);
});