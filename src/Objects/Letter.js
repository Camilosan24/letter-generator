export class Simple {
	constructor(id, title, content) {
		this.id = id;
		this.title = title;
		this.content = content;
	}
	getTitle() {
		return this.title;
	}
	setTitle(title) {
		this.title = title;
	}
	getContent() {
		return this.content;
	}
	setContent(content) {
		this.content = content;
	}
}

export class Birthday extends Simple {
	constructor(id, title, content, image) {
		super(id, title, content);
		this.image = image;
	}
	getImage() {
		return this.image;
	}
	setImage(image) {
		this.image = image;
	}
}

export class Wedding extends Birthday {
	constructor(id, title, content, image) {
		super(id, title, content, image);
	}
	getImage() {
		return this.image;
	}
	setImage(image) {
		this.image = image;
	}
}
