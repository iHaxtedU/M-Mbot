const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't Find User!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You Do Not Have This Permission");
  if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Aye Crackhead That Person Can't Be Kicked");

  let msg = new Discord.RichEmbed()
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setColor("#32ff00")
  .addField("Kick Success", `You Kicked ${kUser} For ${kReason}`)
  
  message.channel.send(msg);

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick Logged")
  .setColor("#1eff3c")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "bot-logs");
  if (!kickChannel) return message.channel.send("Error Finding Channel, Please DM @Ez Potato#2648");

kUser.send(`You Were Kicked From MMMHub For ${kReason} Don't Do It Again!`).then(message.guild.member(kUser).kick(kReason))
  kickChannel.send(kickEmbed);
}
module.exports.help = {
  name: "kick"
}
