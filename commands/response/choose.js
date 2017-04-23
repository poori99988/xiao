const { Command } = require('discord.js-commando');

module.exports = class ChooseCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'choose',
            aliases: [
                'pick'
            ],
            group: 'response',
            memberName: 'choose',
            description: 'Chooses between things.',
            args: [{
                key: 'choices',
                prompt: 'What choices do you want me pick from?',
                type: 'string',
                infinite: true
            }]
        });
    }

    run(message, args) {
        if (message.channel.type !== 'dm') {
            if (!message.channel.permissionsFor(this.client.user).hasPermission(['SEND_MESSAGES', 'READ_MESSAGES'])) return;
        }
        const { choices } = args;
        const choice = choices[Math.floor(Math.random() * choices.length)];
        return message.say(`I choose ${choice}!`);
    }
};
