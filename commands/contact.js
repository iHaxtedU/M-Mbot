const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let iUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!iUser) return message.channel.send("Can't Find User!");
  let iReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Do Not Have This Permission");

  let contactEmbed = new Discord.RichEmbed()
  .setDescription("~You Have Been Contacted~")
  .setColor("#1eff3c")
  .addField("You Have Been Contacted For...", iReason)
  .addField("Sent By", `<@${message.author.id}> with ID ${message.author.id}`);

try{
    await iUser.send(contactEmbed)
  message.channel.send("Message Successfully Sent")
  }catch(e){
    message.channel.send("You Message Could Not Be Sent Because The User Has DM's Disabled")
  }
}
module.exports.help = {
  name: "contact"
}
