// @ts-check

const { ActionRowBuilder } = require("discord.js");
const { ticketButton, destekEkleButon, destekÇıkarButon, destekSilButon } = require("./buttons");
const { destekFormSelect } = require("./selectMenus");
const { mahkemeSebepInput, mahkemeDavalıInput, üyeÇıkarInput, üyeEkleInput } = require("./textInputs");

const destekSebepRow = new ActionRowBuilder().addComponents(mahkemeSebepInput);
const destekDavalıRow = new ActionRowBuilder().addComponents(mahkemeDavalıInput);
const üyeEkleRow = new ActionRowBuilder().addComponents(üyeEkleInput);
const üyeÇıkarRow = new ActionRowBuilder().addComponents(üyeÇıkarInput);
const destekPanelRow = new ActionRowBuilder().addComponents(
  destekEkleButon,
  destekÇıkarButon,
  destekSilButon
);
const destekFormRow = new ActionRowBuilder().addComponents(destekFormSelect);

/**
 * @param {string} label
 */
function ticketRow(label) {
  return new ActionRowBuilder().addComponents(ticketButton(label));
}

module.exports = {
  destekSebepRow,
  destekDavalıRow,
  üyeEkleRow,
  üyeÇıkarRow,
  destekPanelRow,
  destekFormRow,
  ticketRow,
};
