const express = require('express');
const app = express();
const path = require('path')
const uuid = require('uuid').v4
const typedefs = require('./typedefs')
const PORT = 5678;

app.use("/", express.static('public'));
app.use(express.urlencoded({
    extended: true
}))

app.get('/api/team', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'data/teams.json'));
})

app.get('/api/player', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'data/players.json'));
})
app.get('/api/player/position', function(req, res) {
    res.send(["Forward",
        "Midfielder",
        "Defender",
        "Goalkeeper"
    ]);
})

app.post('/api/player', function(req, res) {
    console.log(req.body)
        /**@type{typedefs.FootballPlayer} */
    const player = {
        id: uuid(),
        name: req.body['player-name'],
        position: req.body['player-position'],
        teamid: req.body['player-team'],
    }
    res.send(player)
})
app.listen(PORT, () => console.log(`server started at port ${ PORT }`))