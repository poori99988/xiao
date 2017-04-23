const { Command } = require('discord.js-commando');

module.exports = class HugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            group: 'roleplay',
            memberName: 'hug',
            description: 'Hugs something/someone.',
            args: [{
                key: 'thing',
                prompt: 'What do you want to roleplay with?',
                type: 'string'
            }]
        });
    }

    run(message, args) {
        if (message.channel.type !== 'dm') {
            if (!message.channel.permissionsFor(this.client.user).hasPermission(['SEND_MESSAGES', 'READ_MESSAGES'])) return;
        }
        const { thing } = args;
        return message.say(`${message.author} *hugs* ${thing}`);
    }
};
