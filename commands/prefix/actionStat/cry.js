const { ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");
const superagent = require("superagent");

module.exports = {
  config: {
    name: "cry", // Name of Command
    description: "cries", // Command Description
    usage: "", // Command usage
    cooldown: 20,
  },
  permissions: "", // User permissions needed
  owner: false, // Owner only?
  run: async (client, message, args, prefix, config, db, interaction) => {
    let member = message.mentions.members.first();

    let { body } = await superagent.get(
      `https://purrbot.site/api/img/sfw/cry/gif`
    );

    const Cryingembed = new EmbedBuilder()
      .setTitle(`${message.author.username} is crying`)
      .setColor("#6947F7")
      .setImage(
        `${body.link}
          `
      )
      .setTimestamp();

    message.reply({
      embeds: [Cryingembed],
    }); // execute
  },
};
