import uuid from 'uuid/v1';

export default class Player {
	constructor({
		name,
		alias,
		position,
		image = 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		birthdate,
		history,
		club
	}) {
		this.id = uuid();
		this.name = name;
		this.alias = alias;
		this.position = position;
		this.image = image;
		this.birthdate = birthdate;
		this.history = history;
		this.club = club;
	}
}
