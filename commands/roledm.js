const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  await message.delete();

  const roleArgs = args.slice(0, 1);
  let role = message.guild.member(
    message.mentions.roles.first() ||
      message.guild.roles.find((r) => r.name == roleArgs.join(" "))
  );
  if (
    message.author.id !== "299157627584118787" &&
    message.author.id !== "414111663076147201"
  )
    return message.channel.send("**You can't use this command!**!");
  message.guild.members.map(async (user) => {
    if (roleArgs < 1 || !role) {
      let errorEmbed = new Discord.RichEmbed()
        .setTitle("**ERROR** - Please specify a valid role!")
        .setThumbnail(message.guild.iconURL)
        .addField(
          "**Usage:**",
          "`p@roledm <rolename> <title> <message>`",
          true
        );
      return await message.channel.send(errorEmbed);
    } else {
      if (user.roles.has(role.id)) {
        const messageArgs = args.slice(1);

        if (messageArgs.length < 1) {
          let noMessageEmbed = new Discord.RichEmbed()
            .setTitle("**ERROR** - Please specify a message!")
            .setThumbnail(message.guild.iconURL)
            .addField("**Usage:**", "`p@roledm <rolename> <message>`", true);
          return await message.channel.send(noMessageEmbed);
        } else {
          let embed = new Discord.RichEmbed()
            .setTitle("Polaris Tournaments Announcement")
            .setThumbnail(message.guild.iconURL)
            .setColor("00ffc3")
            .setDescription(messageArgs.join(" "))
            .setTimestamp();
          await user.send(embed);
        }
      } else return undefined;
    }
  });
};

module.exports.help = {
  name: "roledm",
};
