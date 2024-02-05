// @ts-check

const { StringSelectMenuBuilder } = require("discord.js");

const destekFormSelect = new StringSelectMenuBuilder()
  .setCustomId("del")
  .setPlaceholder("Mahkeme Menüsü!")
  .addOptions([
    {
      label: "Mahkeme Salonu Sil",
      description: "Mahkeme Kanalını silersin",
      value: "delete",
    },
    {
      label: "Üye Ekle - Üye Çıkar",
      description: "Mahkemeye üye ekleyip çıkarırsın.",
      value: "panel",
    },
  ]);

module.exports = {
  destekFormSelect,
};
