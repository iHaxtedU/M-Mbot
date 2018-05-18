const Discord = require("discord.js");
const fs = require("fs");
let bal = require("../m&m's.json");

module.exports.run = async (bot, message, args) => {

  if(!bal[message.author.id]){
    return message.reply("You don't have any coins!")
  }

  let pUser = message.mentions.users.first();

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 150
    };
  }

  let pCoins = bal[pUser.id].bal;
  let sCoins = bal[message.author.id].bal;

  if(sCoins < args[0]) return message.reply("Not enough coins there!");

  bal[message.author.id] = {
    bal: sCoins - parseInt(args[1])
  };

  bal[pUser.id] = {
     bal: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} has given ${pUser} ${args[1]} coins.`);

  fs.writeFile("./m&m's.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "pay"
}
