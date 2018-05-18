const Discord = require("discord.js");
let bal = require("../m&m's.json");

module.exports.run = async (bot, message, args) => {
  if(!bal[message.author.id]){
    bal[message.author.id] = {
      bal: 150
    };
  }

  let uCoins = bal[message.author.id].bal;
  
  let infinite = new Discord.RichEmbed()
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setColor("#00FF00")
  .addField("You Have", "∞ M&M's");
  
  if (uCoins > 100000) return message.channel.send(infinite);


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("You Have", `${uCoins} M&M's!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "bal"
}
