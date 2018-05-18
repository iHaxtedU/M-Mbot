const Discord = require("discord.js");
const fs = require("fs");
let bal = require("../m&m's.json");

module.exports.run = async (bot, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You Do Not Have This Permission");

  let pUser = message.mentions.users.first();
  if (!pUser) return message.channel.send("Please Specify A User")

  if(!bal[pUser.id]){
    bal[pUser.id] = {
      coins: 150
    };
  }

  let pCoins = bal[pUser.id].bal;

  if(isNaN(parseInt(args[1]))) return message.channel.send("Use A Number!");
  if (message.content.includes("-")) return message.channel.send("Don't Use A Negative");
  if (message.content.includes(".")) return message.channel.send("No Periods!")

  bal[pUser.id] = {
     bal: pCoins - parseInt(args[1])
  };

  message.channel.send(`${message.author} has taken ${pUser} ${args[1]} M&M's.`);

  fs.writeFile("./m&m's.json", JSON.stringify(bal), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "take"
}
