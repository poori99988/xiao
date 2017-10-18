const { Command } = require('discord.js-commando');

module.exports = class ItsJokeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'its-joke',
			aliases: ['is-joke'],
			group: 'single-res',
			memberName: 'its-joke',
			description: 'It\'s joke!',
			clientPermissions: ['ATTACH_FILES']
		});
	}

	run(msg) {
		return msg.say({ files: ['https://i.imgur.com/NwKdpKK.jpg'] });
	}
};
