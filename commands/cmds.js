const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let help = new Discord.RichEmbed()
.setAuthor(bot.user.username, bot.user.avatarURL)
.setThumbnail(message.author.avatarURL)
.setColor("#3afff8")
.setDescription("~Here Are All The Commands~")
.addField("!ping", "Used To Check The Response Time On The Bot")
.addField("!bal", "Check How Many M&M's You Have")
.addField("!pay (USER) (AMT)", "Use This Command To Pay Someone M&M's")
.addField("!contact", "Admins Can Use This To Contact Someone Using The Bot")
.addField("!give (USER) (AMT)", "Give A User M&M's")
.addField("!take (USER) (AMT)", "Remove A User's M&M's")
.addField("!kick", "Kick A User");

message.channel.send(help);
}

module.exports.help = {
  name: "cmds"
}
