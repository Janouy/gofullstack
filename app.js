const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.json({message:'votre requete...'});
});

module.exports = app;