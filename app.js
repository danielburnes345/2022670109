require('dotenv').config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hola mundo de los servidores web");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	 console.log(`El servidor esta corriendo por el puerto http://localhost:${port}`);

});