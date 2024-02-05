// @ts-check

const { ModalBuilder } = require("@discordjs/builders");
const { üyeÇıkarRow, üyeEkleRow, destekSebepRow } = require("./rows");

const destekModal = new ModalBuilder()
  .setCustomId("form")
  .setTitle("Mahkeme Salonu!")
  .addComponents(destekSebepRow);
const üyeEkleModal = new ModalBuilder()
  .setCustomId("eklemenu")
  .setTitle("Mahkeme Salonu")
  .addComponents(üyeEkleRow);
const üyeÇıkarModal = new ModalBuilder()
  .setCustomId("eklemenu2")
  .setTitle("Mahkeme Salonu")
  .addComponents(üyeÇıkarRow);

module.exports = {
  destekModal,
  üyeEkleModal,
  üyeÇıkarModal,
};
