// @ts-check

const { TextInputBuilder, TextInputStyle } = require("discord.js");

const mahkemeSebepInput = new TextInputBuilder()
  .setCustomId("sebep")
  .setLabel("Dava açma sebebiniz nedir?")
  .setStyle(TextInputStyle.Paragraph)
  .setMinLength(2)
  .setPlaceholder("Bir sebep gir.")
  .setRequired(true);
const mahkemeDavalıInput = new TextInputBuilder()
.setCustomId("davalı")
.setLabel("Kime dava açacaksınzı?")
.setStyle(TextInputStyle.Paragraph)
.setMinLength(2)
.setPlaceholder("Bir ID - AD gir.")
.setRequired(true);


const üyeEkleInput = new TextInputBuilder()
  .setCustomId("uyeid")
  .setLabel("Kullanıcı ID")
  .setStyle(TextInputStyle.Paragraph)
  .setMinLength(10)
  .setPlaceholder("Eklemek istediğiniz kullanıcının id girin.")
  .setRequired(true);

const üyeÇıkarInput = new TextInputBuilder()
  .setCustomId("cikarid")
  .setLabel("Kullanıcı ID")
  .setStyle(TextInputStyle.Paragraph)
  .setMinLength(10)
  .setPlaceholder("Çıkarmak istediğiniz kullanıcı ID girin.")
  .setRequired(true);

module.exports = {
  mahkemeSebepInput,
  mahkemeDavalıInput,
  üyeEkleInput,
  üyeÇıkarInput,
};
