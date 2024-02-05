// @ts-check

const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { helperError } = require("./helpers/utils");
const { checkConfig } = require("./helpers/config");

process.on("uncaughtException", helperError).on("unhandledRejection", helperError);

const checked = checkConfig();
if (!checked) process.exit(0);

const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);

const { TOKEN } = require("./config.json");
const { loadCommands } = require("./helpers/commandSystem");
const { loadEvents } = require("./helpers/eventSystem");

const client = new Client({
  intents: INTENTS,
  allowedMentions: { parse: ["users"] },
  partials: PARTIALS,
  retryLimit: 3,
});

loadCommands();
loadEvents(client);
//HOST
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Web Server Başladı.'));

app.listen(port, () =>
    console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)
);
module.exports = client;


client.login(TOKEN);
