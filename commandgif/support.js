const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor(`RANDOM`)
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setTitle(`**Links**`)
.setDescription(`
[Invite Me](linke bott dane)
-
[Support Server](linke servert)
`)
.setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['support'],
permLevel: 0
};

exports.help = {
  name: 'support',
  description: 'rexuss',
  usage: 'support'
};
