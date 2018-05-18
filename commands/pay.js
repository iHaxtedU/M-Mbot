const Discord = require("discord.js");
const fs = require("fs");
let bal = require("../m&m's.json");

module.exports.run = async (bot, message, args) => {

  if(!bal[message.author.id]){
    return message.reply("You don't have any M&M's!")
  }

  let pUser = message.mentions.users.first();
  if (!pUser) return message.channel.send("Please Specify A User")
  if (pUser.id === message.author.id) return message.channel.send("Nope");

  if(!bal[pUser.id]){
    bal[pUser.id] = {
      coins: 150
    };
  }

  let pCoins = bal[pUser.id].bal;
  let sCoins = bal[message.author.id].bal;

  if(isNaN(parseInt(args[1]))) return message.channel.send("Use A Number")

  if(sCoins < parseInt(args[1])) return message.reply("Not enough M&M's there!");

  bal[message.author.id] = {
    bal: sCoins - parseInt(args[1])
  };

  bal[pUser.id] = {
     bal: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} has given ${pUser} ${args[1]} M&M's.`);

  fs.writeFile("./m&m's.json", JSON.stringify(bal), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "pay"
}
