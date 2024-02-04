interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O título do post é: ${this.title}`;
  }
}

const myPost = new blogPost("Hello World!");

console.log(myPost);

class TestingInterface implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O título é ${this.title}`;
  }
}
