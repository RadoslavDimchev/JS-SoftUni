const Header = () => {
  return (
    <header>
      {/* Navigation */}
      <h1>
        <a className="home" href="#">
          GamesPlay
        </a>
      </h1>
      <nav>
        <a href="#">All games</a>
        {/* Logged-in users */}
        <div id="user">
          <a href="#">Create Game</a>
          <a href="#">Logout</a>
        </div>
        {/* Guest users */}
        <div id="guest">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;