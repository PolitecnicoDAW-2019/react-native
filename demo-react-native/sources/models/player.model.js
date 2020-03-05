import uuid from 'uuid/v1';

export default class Player {
	constructor({
		name,
		alias,
		position,
		image = require('../../assets/images/default.jpg'),
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
