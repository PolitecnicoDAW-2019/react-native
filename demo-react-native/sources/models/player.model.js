import uuid from 'uuid/v1';

export default class Player {
	constructor({ name, alias, position, image, birthday, history, club }) {
		this.id = uuid();
		this.name = name;
		this.alias = alias;
		this.position = position;
		this.image = image;
		this.birthday = birthday;
		this.history = history;
		this.club = club;
	}
}
