const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {
    message.guild.members.forEach(user => {
        const role = message.guild.roles.find(`name`, args[0]);
        if(user.roles.has(role.id)){
            let embed = Discord.RichEmbed()
            .setTitle("POLARIS", message.guild.iconURL)
            .setColor("00ffc3")
            .setDescription(args[1]);
            user.send(embed);
        };
    });
};

module.exports.help = {
    name: "roledm"
}