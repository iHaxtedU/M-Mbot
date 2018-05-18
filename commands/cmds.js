const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let help = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL)
.setThumbnail(message.author.avatarURL)
.setColor("#3afff8")
.setDescription("~Here Are All The Commands~")
.addField("!ping", "Used To Check The Response Time On The Bot");

message.channel.send(help);
}

module.exports.help = {
  name: "cmds"
}
