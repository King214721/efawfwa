// @ts-check

const { EmbedBuilder, Colors } = require("discord.js");

const yetkiYokEmbed = new EmbedBuilder()
  .setColor(Colors.Red)
  .setDescription("Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın.");

const destekSıfırlamaBaşarı = new EmbedBuilder()
  .setDescription(`Mahkeme sistemi başarıyla sıfırlandı.`)
  .setColor(Colors.Green);

const destekRolEksik = new EmbedBuilder()
  .setColor(Colors.Red)
  .setDescription("Mahkeme yetkili rolü ayarlanmamış.");
const destekKanalEksik = new EmbedBuilder()
  .setColor(Colors.Red)
  .setDescription("Mahkeme log kanalı ayarlanmamış.");

const destekRolAyarlı = new EmbedBuilder()
  .setColor(Colors.Red)
  .setDescription("Mahkeme yetkili rolü zaten ayarlanmış.");
const destekKanalAyarlı = new EmbedBuilder()
  .setColor(Colors.Red)
  .setDescription("Mahkeme log kanalı zaten ayarlanmış.");

/**
 * @param {any} kanal
 * @param {any} rol
 */
function destekBaşarıEmbed(kanal, rol) {
  return new EmbedBuilder()
    .setDescription(
      `Mahkeme Sistemi başarıyla ayarlandı.\n\nDestek Log: ${kanal}\nDestek Yetkili: ${rol}`
    )
    .setColor(Colors.Green);
}

/**
 * @param {string | null} mesaj
 */
function destekMesajEmbed(mesaj) {
  return new EmbedBuilder().setTitle("Mahkeme Sistemi").setDescription(mesaj).setColor(Colors.Green);
}

const açıkTalepVar = new EmbedBuilder()
  .setColor(Colors.Red)
  .setDescription("Zaten açık bir mahkemeniz var.");

/**
 * @param {string} userId
 * @param {string} channelName
 */
function talepSilindiLogEmbed(userId, channelName) {
  return new EmbedBuilder()
    .setTitle("Mahkeme Sistemi")
    .setDescription(`Bir Mahkeme salon silindi.`)
    .addFields(
      { name: `Salonu Kapatan:`, value: `<@${userId}>`, inline: true },
      { name: `Kapatılan Salon:`, value: `**${channelName}**`, inline: true }
    );
}

/**
 * @param {string} userTag
 * @param {string} reason
 */
function talepOluşturulduLogEmbed(userTag, reason) {
  return new EmbedBuilder()
    .setTitle("Mahkeme!")
    .setDescription(
      `**${userTag}** adlı kullanıcı **${reason}** nedeniyle bir salon oluşturdu.`
    )
    .setColor(Colors.Green);
}

/**
 * @param {string} userId
 */
function talepEklendiEmbed(userId) {
  return new EmbedBuilder()
    .setTitle("Mahkeme Sistemi")
    .setDescription(`<@${userId}> adlı kullanıcı destek talebine eklendi.`);
}

/**
 * @param {string} userId
 */
function talepAtıldıEmbed(userId) {
  return new EmbedBuilder()
    .setTitle("Mahkeme Sistemi")
    .setDescription(`<@${userId}> adlı kullanıcı destek talebinden atıldı.`);
}

const destekPanelEmbed = new EmbedBuilder()
  .setTitle("Kullanıcı Paneli")
  .setDescription("Aşağıdaki butonlardan üye ekleyebilir veya çıkarabilirsin!")
  .setColor("Random");

const sahipDeğilEmbed = new EmbedBuilder()
  .setColor(Colors.Red)
  .setDescription(`🛡️ Bu talebin sahibi veya talep yetkilisi değilsiniz.`);

module.exports = {
  yetkiYokEmbed,
  destekSıfırlamaBaşarı,
  destekRolEksik,
  destekKanalEksik,
  destekRolAyarlı,
  destekKanalAyarlı,
  destekBaşarıEmbed,
  destekMesajEmbed,
  açıkTalepVar,
  talepSilindiLogEmbed,
  talepOluşturulduLogEmbed,
  talepEklendiEmbed,
  talepAtıldıEmbed,
  destekPanelEmbed,
  sahipDeğilEmbed,
};
