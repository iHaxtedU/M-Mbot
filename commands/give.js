const Discord = require("discord.js");
const fs = require("fs");
let bal = require("../m&m's.json");

module.exports.run = async (bot, message, args) => {

  let pUser = message.mentions.users.first();
  if (!pUser) return message.channel.send("Please Specify A User")
  if (pUser.id === message.author.id) return message.channel.send("Don't Even Try Tricking Me, (I See You EVERYWHERE)");

  if(!bal[pUser.id]){
    bal[pUser.id] = {
      coins: 150
    };
  }

  let pCoins = bal[pUser.id].bal;

  if(isNaN(parseInt(args[1]))) return message.channel.send("Use A Number!");
  if (message.content.includes("-")) return message.channel.send("Use !take For Taking Away Tokens");
  if (message.content.includes(".")) return message.channel.send("Real Number Plz!")

  bal[pUser.id] = {
     bal: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} has given ${pUser} ${args[1]} M&M's.`);

  fs.writeFile("./m&m's.json", JSON.stringify(bal), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "give"
}
