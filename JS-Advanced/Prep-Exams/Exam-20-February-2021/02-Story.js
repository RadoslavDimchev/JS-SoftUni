class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length === 1) {
      return `${this._likes[0]} likes this story!`;
    }

    return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
  }

  like(username) {
    if (this._likes.includes(username)) {
      throw new Error('You can\'t like the same story twice!');
    } else if (username === this.creator) {
      throw new Error('You can\'t like your own story!');
    }

    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    const usernameIndex = this._likes.indexOf(username);
    if (usernameIndex === -1) {
      throw new Error('You can\'t dislike this story!');
    }

    this._likes.splice(usernameIndex, 1);
    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    const findedComment = this._comments.find(c => c.id === id);

    if (!findedComment || id === undefined) {
      this._comments.push({ id: this._comments.length + 1, username, content, replies: [] });
      return `${username} commented on ${this.title}`;
    }

    findedComment.replies.push({ id: `${findedComment.id}.${findedComment.replies.length + 1}`, username, content });
    return 'You replied successfully';
  }
  toString(sortingType) {
    const result = [
      `Title: ${this.title}`,
      `Creator: ${this.creator}`,
      `Likes: ${this._likes.length}`,
      'Comments:'
    ];

    const sortingTypes = {
      asc: (a, b) => a.id - b.id,
      desc: (a, b) => b.id - a.id,
      username: (a, b) => a.username.localeCompare(b.username)
    };

    this._comments
      .sort(sortingTypes[sortingType])
      .forEach(c => {
        result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
        c.replies
          .sort(sortingTypes[sortingType])
          .forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`));
      });

    return result.join('\n');
  }
}

let art = new Story('My Story', 'Anny');
art.like('John');
console.log(art.likes);
art.dislike('John');
console.log(art.likes);
art.comment('Sammy', 'Some Content');
console.log(art.comment('Ammy', 'New Content'));
art.comment('Zane', 'Reply', 1);
art.comment('Jessy', 'Nice :)');
console.log(art.comment('SAmmy', 'Reply@', 1));
console.log();
console.log(art.toString('username'));
console.log();
art.like('Zane');
console.log(art.toString('desc'));

// John likes this story!
// My Story has 0 likes
// Ammy commented on My Story
// You replied successfully

// Title: My Story
// Creator: Anny
// Likes: 0
// Comments:
// -- 2. Ammy: New Content
// -- 3. Jessy: Nice :)
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply

// Title: My Story
// Creator: Anny
// Likes: 1
// Comments:
// -- 3. Jessy: Nice :)
// -- 2. Ammy: New Content
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply