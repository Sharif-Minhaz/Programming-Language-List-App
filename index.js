const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
const { PORT } = process.env;

let pl = [];

app.get("/", (req, res) => {
	res.render("index", { plArray: pl, title: "Home" });
});

app.get("/contact", (req, res) => {
	res.render("contact", { title: "Contact" });
});

app.get("/del", (req, res) => {
	pl.pop();
	res.redirect("/");
})

app.post("/", (req, res) => {
	const pLanguage = req.body.pLanguage;
	pl.push(pLanguage);
	res.redirect("/");
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
