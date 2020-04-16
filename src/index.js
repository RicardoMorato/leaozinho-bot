/* eslint-disable no-console */
const Discord = require('discord.js');
const { prefix, token, channelId } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
  const server = client.channels.cache.get(channelId);
  const list = [];
  server.members.map((member) => {
    list.push(member.user.username);
    return list;
  });
  console.log(list);
});

client.on('message', (message) => {
  if (message.content === `${prefix}ping`) {
    message.channel.send('PONG!');
  } else if (message.content === `${prefix}oi` && message.author.username === 'Ricardo Morato Rocha') {
    message.channel.send(`Oi ${message.author.username}, você é lindo`);
  } else if (message.content === `${prefix}oi`) {
    message.channel.send(`Oi ${message.author.username}, você é feio`);
  } else if (message.content === `${prefix}vtnc`) {
    message.channel.send(`Vai tu ${message.author.username}, FILHO DE RAPARIGA`);
  }
});

client.login(
  token,
);
