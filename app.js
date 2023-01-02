const express = require ("express");
const app = express ();
const path = require ("path");
const port = process.env.PORT || 3000;

const publicFolderPath = path.resolve(__dirname, "./public");
app.use (express.static(publicFolderPath));

app.set ("views", path.resolve(__dirname, "./views"))

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto" + " " + port);
});

app.get ("/", (req, res) => {
    res.sendFile (path.join(__dirname, "./views/index.html"));
});

