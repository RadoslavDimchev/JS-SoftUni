const { expect } = require('chai');
const ChristmasMovies = require('./christmasMovies');

describe('ChristmasMovies', () => {
  describe('Instantiation with no parameters', () => {
    it('movieCollection', () => {
      const instance = new ChristmasMovies();
      expect(instance.movieCollection).to.deep.equal([]);
    });

    it('watched', () => {
      const instance = new ChristmasMovies();
      expect(instance.watched).to.deep.equal({});
    });

    it('actors', () => {
      const instance = new ChristmasMovies();
      expect(instance.actors).to.deep.equal([]);
    });
  });

  describe('buyMovie', () => {
    it('Add movie to movieCollection', () => {
      const instance = new ChristmasMovies();
      expect(instance.buyMovie('MovieName', ['testActor'])).to.equal('You just got MovieName to your collection in which testActor are taking part!');
    });

    it('Add movie and unique actors to movieCollection', () => {
      const instance = new ChristmasMovies();
      expect(instance.buyMovie('MovieName', ['testActor', 'testActor'])).to.equal('You just got MovieName to your collection in which testActor are taking part!');
    });

    it('Exist movie', () => {
      const instance = new ChristmasMovies();
      instance.buyMovie('MovieName', ['testActor']);
      expect(() => instance.buyMovie('MovieName', ['testActor'])).to.throw('You already own MovieName in your collection!');
    });
  });

  describe('discardMovie', () => {
    it('Movie is not watched', () => {
      const instance = new ChristmasMovies();
      instance.buyMovie('MovieName', ['testActor']);
      expect(() => instance.discardMovie('MovieName')).to.throw('MovieName is not watched!');
    });

    it('Discard movie from watched', () => {
      const instance = new ChristmasMovies();
      instance.buyMovie('MovieName', ['testActor']);
      instance.watchMovie('MovieName');
      expect(instance.discardMovie('MovieName')).to.equal('You just threw away MovieName!');
    });

    it('Discard movie from watched', () => {
      const instance = new ChristmasMovies();
      expect(() => instance.discardMovie('MovieName')).to.throw('MovieName is not at your collection!');
    });
  });

  describe('watchMovie', () => {
    it('Add movie in watchedMovie', () => {
      const instance = new ChristmasMovies();
      instance.buyMovie('MovieName', ['testActor']);
      instance.watchMovie('MovieName');
      expect(instance.watched).to.deep.equal({ MovieName: 1 });
    });

    it('Increase the counter in watchedMovie', () => {
      const instance = new ChristmasMovies();
      instance.buyMovie('MovieName', ['testActor']);
      instance.watchMovie('MovieName');
      instance.watchMovie('MovieName');
      expect(instance.watched).to.deep.equal({ MovieName: 2 });
    });

    it('Movie is not in the movieCollection', () => {
      const instance = new ChristmasMovies();
      expect(() => instance.watchMovie('MovieName')).to.throw('No such movie in your collection!');
    });
  });

  describe('favouriteMovie', () => {
    it('Happy path, get favourite movie', () => {
      const instance = new ChristmasMovies();
      instance.buyMovie('MovieName', ['testActor']);
      instance.buyMovie('MovieName2', ['testActor']);
      instance.watchMovie('MovieName');
      instance.watchMovie('MovieName');
      instance.watchMovie('MovieName2', ['testActor']);
      expect(instance.favouriteMovie('MovieName')).to.equal('Your favourite movie is MovieName and you have watched it 2 times!');
    });

    it('No movies in watched list', () => {
      const instance = new ChristmasMovies();
      expect(() => instance.favouriteMovie('MovieName')).to.throw('You have not watched a movie yet this year!');
    });
  });

  describe('mostStarredActor', () => {
    it('Happy path, get mostStarredActor', () => {
      const instance = new ChristmasMovies();
      instance.buyMovie('MovieName', ['testActor', 'testActor2']);
      instance.buyMovie('MovieName2', ['testActor', 'testActor2']);
      instance.buyMovie('MovieName3', ['testActor']);
      instance.watchMovie('MovieName');
      instance.watchMovie('MovieName2');
      instance.watchMovie('MovieName3');
      expect(instance.mostStarredActor()).to.equal('The most starred actor is testActor and starred in 3 movies!');
    });

    it('No movies in watched list', () => {
      const instance = new ChristmasMovies();
      expect(() => instance.mostStarredActor()).to.throw('You have not watched a movie yet this year!');
    });
  });
});